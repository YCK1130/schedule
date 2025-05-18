import type { GroupRestriction } from "../../contexts/SchedulingContext";
import type { Interviewee, Interviewer, ScheduledInterview } from "../../types";
import {
    countInterviewerAssignments,
    getAllTimeSlots,
    getRestrictionRange,
    isTimeSlotAvailable, parseTimeSlot
} from "../schedulerUtils";

// 優化的貪婪算法
export const optimizedGreedyMatching = (
    interviewers: Interviewer[],
    interviewees: Interviewee[],
    groupRestrictions: {
        [key: string]: GroupRestriction[];
    }
) => {
    // 先確保所有時間段格式正確
    const unmatched = {
        interviewers: [] as Interviewer[],
        interviewees: [] as Interviewee[],
        reasons: [] as string[],
    };
    const interviews: ScheduledInterview[] = [];
    const validInterviewers = interviewers.filter((interviewer) => interviewer.availability && interviewer.availability.length > 0);
    const validInterviewees = interviewees.filter((interviewee) => interviewee.availability && interviewee.availability.length > 0);
    // 如果沒有有效的面試官或應試者，直接返回
    if (validInterviewers.length === 0 || validInterviewees.length === 0) {
        console.log("沒有有效的面試官或應試者");
        // 將所有無效的面試官和應試者標記為未匹配
        interviewers
            .filter((i) => !i.availability || i.availability.length === 0)
            .forEach((i) => {
                unmatched.interviewers.push(i);
                unmatched.reasons.push(`面試官 ${i.name} 沒有可用時段`);
            });
        interviewees
            .filter((i) => !i.availability || i.availability.length === 0)
            .forEach((i) => {
                unmatched.interviewees.push(i);
                unmatched.reasons.push(`應試者 ${i.name} 沒有可用時段`);
            });
        return {
            interviews,
            unmatched
        }
    }

    // 收集所有可能的時間段
    const allTimeSlots = getAllTimeSlots(interviewers, interviewees);
    console.log(`共有 ${allTimeSlots.length} 個可能的時間段`);

    // 按時間順序排序時間段
    allTimeSlots.sort((a, b) => {
        const timeA = parseTimeSlot(a).start;
        const timeB = parseTimeSlot(b).start;
        return timeA.getTime() - timeB.getTime();
    });

    // 追蹤已分配的應試者
    const assignedIntervieweeIds = new Set<string>();

    // 開始為每個時間段分配面試
    for (const timeSlot of allTimeSlots) {
        // 尋找這個時間段可用的應試者（排除已分配的應試者）
        const availableInterviewees = validInterviewees.filter(
            (interviewee) => 
                isTimeSlotAvailable(interviewee, timeSlot, interviews) && 
                !unmatched.interviewees.includes(interviewee) &&
                !assignedIntervieweeIds.has(interviewee.id) // 確保應試者尚未被分配
        );

        // 如果沒有可用的應試者，跳過這個時間段
        if (availableInterviewees.length === 0) continue;

        // 尋找這個時間段可用的面試官
        const availableInterviewers = validInterviewers.filter((interviewer) => isTimeSlotAvailable(interviewer, timeSlot, interviews));

        // 獲取面試官限制範圍
        const interviewerRange = getRestrictionRange(groupRestrictions.interviewers);
        const minInterviewers = interviewerRange.min;
        const maxInterviewers = interviewerRange.max;

        // 如果沒有足夠的面試官，跳過這個時間段
        if (availableInterviewers.length < minInterviewers) continue;

        // 基於已分配次數和可用時間段數量排序面試官
        const interviewerAssignmentCounts = countInterviewerAssignments(interviews, interviewers);
        const sortedInterviewers = [...availableInterviewers].sort((a, b) => {
            // 首先按照已分配的面試次數排序（優先選擇分配次數少的）
            const aCount = interviewerAssignmentCounts.get(a.id) || 0;
            const bCount = interviewerAssignmentCounts.get(b.id) || 0;
            if (aCount !== bCount) return aCount - bCount;

            // 次數相同時，按照可用時間段數量排序（優先選擇時間段少的）
            return a.availability.length - b.availability.length;
        });

        // 選擇介於最小值和最大值之間的面試官數量
        // 如果可用面試官數量大於最大限制，則選擇最大限制數量
        // 否則選擇所有可用的面試官
        const interviewerCount = Math.min(availableInterviewers.length, maxInterviewers);

        // 至少要滿足最小數量要求
        if (interviewerCount < minInterviewers) continue;

        // 選擇所需數量的面試官
        const selectedInterviewers = sortedInterviewers.slice(0, interviewerCount);

        // 獲取應試者限制範圍
        const intervieweeRange = getRestrictionRange(groupRestrictions.interviewees);
        const minInterviewees = intervieweeRange.min;
        const maxInterviewees = intervieweeRange.max;

        // 決定要分配多少應試者，在範圍內儘量多分配
        const intervieweeCount = Math.min(availableInterviewees.length, maxInterviewees);

        // 至少要滿足最小數量要求
        if (intervieweeCount < minInterviewees) continue;

        const intervieweesToAssign = availableInterviewees.slice(0, intervieweeCount);

        // 創建面試安排
        const [startTime, endTime] = timeSlot.split("/");
        const interview: ScheduledInterview = {
            interviewerIds: selectedInterviewers.map((i) => i.id),
            interviewerNames: selectedInterviewers.map((i) => i.name),
            intervieweeIds: intervieweesToAssign.map((i) => i.id),
            intervieweeNames: intervieweesToAssign.map((i) => i.name),
            startTime,
            endTime,
        };

        interviews.push(interview);
        
        // 將已分配的應試者加入到追蹤集合中
        intervieweesToAssign.forEach(interviewee => {
            assignedIntervieweeIds.add(interviewee.id);
        });
        
        console.log(
            `安排了面試: ${intervieweesToAssign.map((i) => i.name).join(", ")} 與 ${selectedInterviewers
                .map((i) => i.name)
                .join(", ")} 在 ${startTime}`
        );
    }

    // 標記所有未分配的應試者
    const unmatchedInterviewees = validInterviewees.filter((interviewee) => !assignedIntervieweeIds.has(interviewee.id));

    unmatchedInterviewees.forEach((interviewee) => {
        if (!unmatched.interviewees.includes(interviewee)) {
            unmatched.interviewees.push(interviewee);
            unmatched.reasons.push(`無法為應試者 ${interviewee.name} 找到符合限制條件的時段`);
        }
    });

    // 標記所有未分配的面試官
    const assignedInterviewerIds = new Set(interviews.flatMap((i) => i.interviewerIds));
    const unmatchedInterviewers = validInterviewers.filter((interviewer) => !assignedInterviewerIds.has(interviewer.id));

    unmatchedInterviewers.forEach((interviewer) => {
        if (!unmatched.interviewers.includes(interviewer)) {
            unmatched.interviewers.push(interviewer);
            unmatched.reasons.push(`面試官 ${interviewer.name} 未被安排任何面試`);
        }
    });
    return {
        interviews,
        unmatched: {
            interviewers: unmatchedInterviewers,
            interviewees: unmatchedInterviewees,
            reasons: unmatched.reasons,
        },
    }
    
};
