from collections import defaultdict

import pulp


class Member:
    def __init__(self, id, available_slots):
        self.id = id
        self.available_slots = available_slots


def schedule_interviews_ilp(group_a, group_b, constraints):
    """
    使用整數線性規劃解決面試排程問題

    參數:
    - group_a: A組成員列表
    - group_b: B組成員列表
    - constraints: 約束條件

    返回:
    - 最優排程方案
    """
    # 獲取所有可能的時段
    all_slots = get_all_time_slots(group_a, group_b)

    # 創建問題實例
    prob = pulp.LpProblem("Interview_Scheduling", pulp.LpMinimize)

    # 決策變量
    # x[i][j][k] = 1 表示在時段k，A組成員i和B組成員j一同參與面試
    x = {}
    for slot in all_slots:
        for a_member in group_a:
            if slot in a_member.available_slots:
                for b_member in group_b:
                    if slot in b_member.available_slots:
                        x[(a_member.id, b_member.id, slot)] = pulp.LpVariable(
                            f"x_{a_member.id}_{b_member.id}_{slot.replace(' ', '_')}",
                            cat="Binary",
                        )

    # 時段啟用變量 - y[k] = 1 表示時段k被使用
    y = {}
    for slot in all_slots:
        y[slot] = pulp.LpVariable(f"y_{slot.replace(' ', '_')}", cat="Binary")

    # A成員分配變量 - a[i] = 1 表示A組成員i被分配
    a = {}
    for a_member in group_a:
        a[a_member.id] = pulp.LpVariable(f"a_{a_member.id}", cat="Binary")

    # B成員使用次數變量
    b_usage = {}
    for b_member in group_b:
        b_usage[b_member.id] = pulp.LpVariable(
            f"b_usage_{b_member.id}", lowBound=0, cat="Integer"
        )

    # 目標函數：最小化未分配的A成員數量 + 時段數量 + B成員總使用次數
    # 權重設定：A成員優先級最高，其次是時段數量，最後是B成員使用次數
    prob += (
        100000 * (len(group_a) - pulp.lpSum(a.values()))
        + 1000 * pulp.lpSum(y.values())
        + pulp.lpSum(b_usage.values())
    )

    # 約束條件

    # 1. A成員最多被分配一次
    for a_member in group_a:
        prob += (
            pulp.lpSum(
                x[(a_member.id, b_member.id, slot)]
                for slot in all_slots
                if slot in a_member.available_slots
                for b_member in group_b
                if slot in b_member.available_slots
            )
            <= 1
        )

    # 2. A成員分配狀態定義
    for a_member in group_a:
        prob += a[a_member.id] == pulp.lpSum(
            x[(a_member.id, b_member.id, slot)]
            for slot in all_slots
            if slot in a_member.available_slots
            for b_member in group_b
            if slot in b_member.available_slots
        )

    # 3. B成員使用次數定義
    for b_member in group_b:
        prob += b_usage[b_member.id] == pulp.lpSum(
            x[(a_member.id, b_member.id, slot)]
            for slot in all_slots
            if slot in b_member.available_slots
            for a_member in group_a
            if slot in a_member.available_slots
        )

    # 4. 時段啟用條件
    for slot in all_slots:
        prob += (
            pulp.lpSum(
                x[(a_member.id, b_member.id, slot)]
                for a_member in group_a
                if slot in a_member.available_slots
                for b_member in group_b
                if slot in b_member.available_slots
            )
            <= 100 * y[slot]
        )

    # 5. 每個時段的A成員數量約束
    for slot in all_slots:
        # A組成員數量在min_a和max_a之間
        a_in_slot = pulp.lpSum(
            x[(a_member.id, b_member.id, slot)]
            for a_member in group_a
            if slot in a_member.available_slots
            for b_member in group_b
            if slot in b_member.available_slots
        )

        prob += a_in_slot >= constraints["min_a"] * y[slot]
        prob += a_in_slot <= constraints["max_a"] * y[slot]

    # 6. 每個時段的B成員數量約束
    for slot in all_slots:
        # 計算每個時段中每個B成員是否被使用
        b_usage_in_slot = {}
        for b_member in group_b:
            if slot in b_member.available_slots:
                b_usage_in_slot[b_member.id] = pulp.LpVariable(
                    f"b_used_{b_member.id}_{slot.replace(' ', '_')}", cat="Binary"
                )
                # 如果B成員在該時段與任何A成員配對，則b_usage_in_slot=1
                prob += b_usage_in_slot[b_member.id] <= pulp.lpSum(
                    x[(a_member.id, b_member.id, slot)]
                    for a_member in group_a
                    if slot in a_member.available_slots
                )
                prob += (
                    pulp.lpSum(
                        x[(a_member.id, b_member.id, slot)]
                        for a_member in group_a
                        if slot in a_member.available_slots
                    )
                    <= 100 * b_usage_in_slot[b_member.id]
                )

        # B組成員數量在min_b和max_b之間
        prob += pulp.lpSum(b_usage_in_slot.values()) >= constraints["min_b"] * y[slot]
        prob += pulp.lpSum(b_usage_in_slot.values()) <= constraints["max_b"] * y[slot]

    # 求解
    prob.solve(pulp.PULP_CBC_CMD(msg=False))

    # 處理結果
    schedules = []
    if pulp.LpStatus[prob.status] == "Optimal":
        for slot in all_slots:
            if y[slot].value() > 0.5:  # 時段被使用
                a_members_in_slot = []
                b_members_in_slot = set()

                for a_member in group_a:
                    if slot in a_member.available_slots:
                        for b_member in group_b:
                            if slot in b_member.available_slots:
                                if x[(a_member.id, b_member.id, slot)].value() > 0.5:
                                    a_members_in_slot.append(a_member)
                                    b_members_in_slot.add(b_member)

                schedules.append(
                    {
                        "time_slot": slot,
                        "a_members": a_members_in_slot,
                        "b_members": list(b_members_in_slot),
                    }
                )

    return schedules


def get_all_time_slots(group_a, group_b):
    """獲取所有可能的時段"""
    all_slots = set()
    for member in group_a + group_b:
        all_slots.update(member.available_slots)
    return list(all_slots)


# 使用示例
if __name__ == "__main__":
    # 示例數據
    group_a = [
        Member("A1", ["Monday 10:00", "Tuesday 14:00", "Tuesday 15:00"]),
        Member("A2", ["Monday 10:00", "Wednesday 11:00"]),
        Member("A3", ["Tuesday 14:00", "Wednesday 11:00"]),
        Member(
            "A4",
            [
                "Monday 10:00",
                "Thursday 15:00",
                "Tuesday 14:00",
            ],
        ),
        Member(
            "A5",
            [
                "Thursday 15:00",
                "Friday 16:00",
                "Tuesday 14:00",
            ],
        ),
        Member(
            "A6",
            [
                "Thursday 15:00",
                "Friday 16:00",
                "Tuesday 14:00",
                "Tuesday 15:00",
                "Tuesday 16:00",
            ],
        ),
        Member(
            "A7",
            [
                "Thursday 15:00",
                "Friday 16:00",
                "Tuesday 14:00",
                "Tuesday 13:00",
                "Tuesday 16:00",
            ],
        ),
        Member(
            "A8",
            [
                "Thursday 15:00",
                "Friday 16:00",
                "Tuesday 14:00",
                "Tuesday 12:00",
                "Tuesday 16:00",
            ],
        ),
        Member(
            "A9",
            [
                "Thursday 15:00",
                "Friday 16:00",
                "Tuesday 14:00",
                "Tuesday 17:00",
                "Tuesday 16:00",
            ],
        ),
        Member(
            "A10",
            [
                "Thursday 15:00",
                "Friday 16:00",
                "Tuesday 14:00",
                "Tuesday 15:00",
                "Tuesday 16:00",
            ],
        ),
    ]

    group_b = [
        Member("B1", ["Monday 10:00", "Tuesday 14:00", "Wednesday 11:00"]),
        Member("B2", ["Monday 10:00", "Thursday 15:00"]),
        Member("B3", ["Tuesday 14:00", "Friday 16:00"]),
        Member("B4", ["Wednesday 11:00", "Thursday 15:00"]),
    ]

    constraints = {"min_a": 1, "max_a": 3, "min_b": 2, "max_b": 3}

    schedules = schedule_interviews_ilp(group_a, group_b, constraints)

    # 輸出結果
    print("整數線性規劃安排的面試場次:")
    for i, schedule in enumerate(schedules, 1):
        print(f"場次 {i} - 時段: {schedule['time_slot']}")
        print(f"  A組成員: {', '.join(m.id for m in schedule['a_members'])}")
        print(f"  B組成員: {', '.join(m.id for m in schedule['b_members'])}")

    # 計算統計信息
    scheduled_a = set()
    for schedule in schedules:
        scheduled_a.update(m.id for m in schedule["a_members"])

    b_usage = defaultdict(int)
    for schedule in schedules:
        for member in schedule["b_members"]:
            b_usage[member.id] += 1

    print("\n統計信息:")
    print(f"A組共 {len(group_a)} 人，成功安排 {len(scheduled_a)} 人")
    if len(group_a) > len(scheduled_a):
        unscheduled_a = [m.id for m in group_a if m.id not in scheduled_a]
        print(f"未安排的A組成員: {', '.join(unscheduled_a)}")

    print("\nB組成員使用次數:")
    for member_id, count in sorted(b_usage.items(), key=lambda x: x[1], reverse=True):
        print(f"  {member_id}: {count} 次")
