import type { Interviewee, Interviewer, ScheduledInterview } from "../../types";
import { checkRestrictions, getAllTimeSlots, isTimeSlotAvailable, parseTimeSlot } from "../schedulerUtils";

// 優化的貪婪算法
export const optimizedGreedyMatching = (
    interviewers: Interviewer[],
    interviewees: Interviewee[],
    groupRestrictions: Map<string, { min: number; max: number }>
) => {
    // 先確保所有時間段格式正確
    const unmatched = {
        interviewers: [] as Interviewer[],
        interviewees: [] as Interviewee[],
        reasons: [] as string[],
    };
    const interviews: ScheduledInterview[] = [];
    const validInterviewers = interviewers.filter((interviewer) => interviewer.availability.length > 0);
    const validInterviewees = interviewees.filter((interviewee) => interviewee.availability.length > 0);
    // 如果沒有有效的面試官或應試者，直接返回
    if (validInterviewers.length === 0 || validInterviewees.length === 0) {
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
            unmatched,
        };
    }

    // 收集所有可能的時間段
    const allTimeSlots = getAllTimeSlots(interviewers, interviewees);

    // 按時間順序排序時間段
    allTimeSlots.sort((a, b) => {
        const timeA = parseTimeSlot(a).start;
        const timeB = parseTimeSlot(b).start;
        return timeA.getTime() - timeB.getTime();
    });

    // 追蹤已分配的應試者
    const assignedIntervieweeIds = new Set<string>();

    // 按照職位分組應試者
    const intervieweesByPosition: Record<string, Interviewee[]> = {};
    validInterviewees.forEach((interviewee) => {
        const position = interviewee.position || "未指定";
        if (!intervieweesByPosition[position]) {
            intervieweesByPosition[position] = [];
        }
        intervieweesByPosition[position].push(interviewee);
    });

    // 為每個職位組的應試者分配面試時間
    for (const position in intervieweesByPosition) {

        // 開始為每個時間段分配面試
        for (const timeSlot of allTimeSlots) {
            // 尋找這個時間段可用的應試者（同一職位且尚未分配）
            const positionInterviewees = intervieweesByPosition[position];
            const availableInterviewees = positionInterviewees.filter(
                (interviewee) =>
                    isTimeSlotAvailable(interviewee, timeSlot, interviews) &&
                    // !unmatched.interviewees.includes(interviewee) &&
                    !assignedIntervieweeIds.has(interviewee.id)
            );

            // 如果沒有可用的應試者，跳過這個時間段
            if (availableInterviewees.length === 0) continue;

            // 尋找這個時間段可用的面試官
            const availableInterviewers = validInterviewers.filter((interviewer) => isTimeSlotAvailable(interviewer, timeSlot, interviews));

            const result = checkRestrictions(groupRestrictions, availableInterviewers, availableInterviewees, interviews);

            if (!result.valid) {
                unmatched.reasons.push(result.reason);
                continue;
            }
            // 創建面試安排
            const [startTime, endTime] = timeSlot.split("/");
            const interview: ScheduledInterview = {
                interviewers: result.interviewers.map((i) => ({ id: i.id, name: i.name, position: i.position })),
                interviewees: result.interviewees.map((i) => ({ id: i.id, name: i.name, position: i.position })),
                startTime,
                endTime,
            };

            interviews.push(interview);

            // 將已分配的應試者加入到追蹤集合中
            result.interviewees.forEach((interviewee) => {
                assignedIntervieweeIds.add(interviewee.id);
            });
            result.interviewers.forEach((interviewer) => {
                if (Array.isArray(interviewer.availability)) {
                    interviewer.availability = interviewer.availability.filter((slot) => slot !== timeSlot);
                }
            });

        }
    }
    // 填滿可以填滿的 interviews
    for (const inter of interviews) {
        const ints = inter.interviewers.map((i) => i.id);
        // 尋找這個時間段可用的應試者（同一職位且尚未分配）

        const availableInters = validInterviewers.filter(
            (interviewer) => isTimeSlotAvailable(interviewer, `${inter.startTime}/${inter.endTime}`, interviews) && !ints.includes(interviewer.id)
        );
        const existPosition = Array.from(groupRestrictions.keys())
            .map((i) => i.split(":")[1])
            .filter((i) => i !== "所有");
        const sortedInters = availableInters.sort((a, b) => {
            return a.availability.length - b.availability.length;
        });
        const { max } = groupRestrictions.get("interviewers:所有") || { min: 1, max: 100 };
        const numTargets = sortedInters.filter((interviewer) => !existPosition.includes(`${interviewer.position}`));
        const interviewersCount = Math.min(numTargets.length + ints.length, max) - ints.length;
        if (interviewersCount > 0) {
            const selectedInters = sortedInters.slice(0, interviewersCount);
            inter.interviewers.push(...selectedInters.map((i) => ({ id: i.id, name: i.name, position: i.position })));
        }
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
    // const assignedInterviewerIds = new Set(interviews.flatMap((i) => i.interviewers.map((j) => j.id)));
    // const unmatchedInterviewers = validInterviewers //.filter((interviewer) => !assignedInterviewerIds.has(interviewer.id));

    // unmatchedInterviewers.forEach((interviewer) => {
    //     if (!unmatched.interviewers.includes(interviewer)) {
    //         unmatched.interviewers.push(interviewer);
    //         unmatched.reasons.push(`面試官 ${interviewer.name} 未被安排任何面試`);
    //     }
    // });
    return {
        interviews: interviews.map((interview, id) => ({ ...interview, id: id + 1 })),
        unmatched: {
            interviewers: validInterviewers, // 因為沒有面試官沒有次數限制，且前面已經剔除他的已用時間，我們顯示所有面試官剩下的時間
            interviewees: unmatchedInterviewees,
            reasons: unmatched.reasons,
        },
    };
};
