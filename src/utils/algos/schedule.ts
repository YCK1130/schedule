import type { Interviewee, Interviewer } from "../../types";
import type { ScheduleResult } from "../schedulerUtils";
import { optimizedGreedyMatching } from "./greedy";

export function scheduleInterviews(
    interviewers: Interviewer[],
    interviewees: Interviewee[],
    groupRestrictions: Map<string, { min: number; max: number }>
): ScheduleResult {
    try {
        const { interviews, unmatched } = optimizedGreedyMatching(interviewers, interviewees, groupRestrictions);
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
