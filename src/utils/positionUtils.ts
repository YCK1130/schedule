import type { Interviewee, Interviewer } from "../types";

/**
 * 從面試者或面試官列表中獲取可用職位列表
 * @param participants 面試官或面試者列表
 * @returns 排序過的職位陣列
 */
export const getPositionsFromParticipants = (participants: (Interviewer | Interviewee)[]): string[] => {
    if (!participants || participants.length === 0) {
        return ["所有"];
    }

    const positions = new Set(["所有"]);
    participants.forEach((participant) => {
        if (participant.position) {
            positions.add(participant.position);
        }
    });

    return Array.from(positions).sort((a, b) => {
        if (a === "所有") return -1;
        if (b === "所有") return 1;
        return a.localeCompare(b);
    });
};