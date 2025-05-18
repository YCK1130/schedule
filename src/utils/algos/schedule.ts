import type { GroupRestriction } from "../../contexts/SchedulingContext";
import type { Interviewee, Interviewer } from "../../types";
import type { ScheduleResult } from "../schedulerUtils";
import { optimizedGreedyMatching } from "./greedy";

export function scheduleInterviews(
    interviewers: Interviewer[],
    interviewees: Interviewee[],
    groupRestrictions: {
        [key: string]: GroupRestriction[];
    }
): ScheduleResult {
    console.log("進入排程函數", {
        面試官人數: interviewers.length,
        應試者人數: interviewees.length,
        群組限制: groupRestrictions,
    });

    try {
        // 執行優化的貪婪匹配算法
        const { interviews, unmatched } = optimizedGreedyMatching(interviewers, interviewees, groupRestrictions);
        // const { interviews, unmatched } = scheduleInterviewsILP(interviewers, interviewees, groupRestrictions);

        console.log("排程完成", {
            成功安排: interviews.length,
            未配對面試官: unmatched.interviewers.length,
            未配對應試者: unmatched.interviewees.length,
        });

        return { interviews, unmatched };
    } catch (error) {
        console.error("排程過程中發生錯誤：", error);
        return {
            interviews: [],
            unmatched: {
                interviewers,
                interviewees,
                reasons: ["排程過程發生錯誤"],
            },
        };
    }
}
