import type { GroupRestriction, Interviewee, Interviewer, ScheduledInterview } from "../types";

export interface ScheduleResult {
    interviews: ScheduledInterview[];
    unmatched: {
        interviewers: Interviewer[];
        interviewees: Interviewee[];
        reasons: string[];
    };
}
const MAX_NUMBER = 1000000;
/**
 * 取得特定群組的範圍限制
 * 從多個限制條件中找出適合特定職位的條件
 */
export const getRestrictionRange = (restrictions: GroupRestriction[], position: string = "所有"): { min: number; max: number; conflict: boolean } => {
    // 尋找匹配職位的限制條件
    const matchedRestrictions = restrictions.filter((r) => r.targetPosition === position);
    let min = 1;
    let max = MAX_NUMBER;
    if (matchedRestrictions.length === 0) {
        // 如果沒有匹配的條件，使用預設值
        return { min, max, conflict: false };
    }

    matchedRestrictions.forEach((restriction) => {
        const minValue = restriction.minCount;
        const maxValue = restriction.maxCount;

        min = Math.max(min, minValue);
        max = Math.min(max, maxValue);
    });

    return { min, max, conflict: max < min };
};

export const checkConflict = (restrictions: {
    [key: string]: GroupRestriction[];
}): { valid: boolean; reason: string; conflict: boolean; results: Map<string, { min: number; max: number }> } => {
    const tagetSet = new Map<string, { min: number; max: number }>();
    let reasonString = "";
    for (const key in restrictions) {
        const group = restrictions[key];
        for (const item of group) {
            const { targetPosition } = item;
            if (!tagetSet.has(targetPosition)) {
                const result = getRestrictionRange(restrictions[key], targetPosition);
                if (result.conflict) {
                    reasonString = `${reasonString}; ${key}:${targetPosition} 條件設置衝突`;
                    continue;
                }
                tagetSet.set(`${key}:${targetPosition}`, { min: result.min, max: result.max });
            }
        }
    }
    if (reasonString.length === 0) return { valid: true, reason: "無衝突", conflict: false, results: tagetSet };
    reasonString = reasonString.slice(2);
    return { valid: false, reason: reasonString, conflict: true, results: {} as Map<string, { min: number; max: number }> };
};

export const checkRestrictions = (
    restrictions: Map<string, { min: number; max: number }>,
    interviewers: Interviewer[],
    interviewees: Interviewee[],
    interviews: ScheduledInterview[]
): { valid: boolean; reason: string; interviewers: Interviewer[]; interviewees: Interviewee[] } => {
    const interviewerAssignmentCounts = countInterviewerAssignments(interviews, interviewers);
    const sortedInterviewers = [...interviewers].sort((a, b) => {
        // 首先按照已分配的面試次數排序（優先選擇分配次數少的）
        const aCount = interviewerAssignmentCounts.get(a.id) || 0;
        const bCount = interviewerAssignmentCounts.get(b.id) || 0;
        if (aCount !== bCount) return aCount - bCount;

        // 次數相同時，按照可用時間段數量排序（優先選擇時間段少的）
        return a.availability.length - b.availability.length;
    });
    const sortedInterviewees = [...interviewees].sort((a, b) => {
        return a.availability.length - b.availability.length;
    });

    const validInterviewersMap = new Map<string, Interviewer[]>();
    const validIntervieweesMap = new Map<string, Interviewee[]>();
    restrictions = new Map<string, { min: number; max: number }>(restrictions);
    let shouldInterviewersNumber = interviewers.length;
    let shouldIntervieweesNumber = interviewees.length;
    if (!restrictions.has("interviewers:所有")) {
        restrictions.set("interviewers:所有", { min: 1, max: MAX_NUMBER });
    }
    if (!restrictions.has("interviewees:所有")) {
        restrictions.set("interviewees:所有", { min: 1, max: MAX_NUMBER });
    }
    let fail = false;
    let failResult = { valid: false, reason: "", interviewers: [] as Interviewer[], interviewees: [] as Interviewee[] };
    restrictions.forEach((value, key) => {
        if (fail) return;
        const [group, position] = key.split(":");
        const { min, max } = value;
        if (group === "interviewers") {
            const numTargets = sortedInterviewers.filter((interviewer) => interviewer.position === position || position === "所有");
            const interviewersCount = Math.min(numTargets.length, max);
            if (interviewersCount < min) {
                fail = true;
                failResult = {
                    valid: false,
                    reason: `面試官 ${position} 數量不合, ${interviewersCount} < ${min}`,
                    interviewers: [] as Interviewer[],
                    interviewees: [] as Interviewee[],
                };
            }
            // return { valid: false, reason: `面試官 ${position} 數量不合`, interviewers: [] as Interviewer[], interviewees: [] as Interviewee[] };
            else if (position !== "所有") {
                // const selectedInterviewers = sortedInterviewers
                //     .filter((interviewer) => interviewer.position === position)
                //     .slice(0, interviewersCount);
                validInterviewersMap.set(position, numTargets.slice(0, interviewersCount));
            } else {
                shouldInterviewersNumber = min;
            }
        } else if (group === "interviewees") {
            const numTargets = sortedInterviewees.filter((interviewee) => interviewee.position === position || position === "所有");
            const intervieweesCount = Math.min(numTargets.length, max);
            if (intervieweesCount < min) {
                fail = true;
                failResult = {
                    valid: false,
                    reason: `應試者 ${position} 數量不合, ${intervieweesCount} < ${min}`,
                    interviewers: [] as Interviewer[],
                    interviewees: [] as Interviewee[],
                };
            } else if (position !== "所有") {
                // const selectedInterviewees = interviewees.filter((interviewee) => interviewee.position === position);
                validIntervieweesMap.set(position, numTargets.slice(0, intervieweesCount));
            } else {
                shouldIntervieweesNumber = intervieweesCount;
            }
        }
    });
    if (fail) {
        return failResult;
    }
    const interviewersResults = [...validInterviewersMap.entries()].reduce((acc, cur) => [...acc, ...cur[1]], [] as Interviewer[]);
    const intervieweesResults = [...validIntervieweesMap.entries()].reduce((acc, cur) => [...acc, ...cur[1]], [] as Interviewee[]);
    let count = 0;
    while (interviewersResults.length < shouldInterviewersNumber) {
        if (count >= interviewers.length) {
            return { valid: false, reason: `面試官數量不合`, interviewers: [] as Interviewer[], interviewees: [] as Interviewee[] };
        }
        if (interviewersResults.includes(interviewers[count]) || validInterviewersMap.has(`${interviewers[count]?.position}`)) {
            count++;
            continue;
        }
        interviewersResults.push(interviewers[count]);
    }
    count = 0;
    while (intervieweesResults.length < shouldIntervieweesNumber) {
        if (count >= interviewees.length) {
            return { valid: false, reason: `應試者數量不合`, interviewers: [] as Interviewer[], interviewees: [] as Interviewee[] };
        }
        if (intervieweesResults.includes(interviewees[count])  || validIntervieweesMap.has(`${interviewers[count]?.position}`)) {
            count++;
            continue;
        }
        intervieweesResults.push(interviewees[count]);
    }

    return { valid: true, reason: ``, interviewers: interviewersResults, interviewees: intervieweesResults };
};

export const parseTimeSlot = (slot: string) => {
    const [start, end] = slot.split("/");
    return { start: new Date(start), end: new Date(end) };
};

// 檢查時段是否重疊（更寬鬆的條件）
export const isOverlapping = (slot1: string, slot2: string) => {
    try {
        const time1 = parseTimeSlot(slot1);
        const time2 = parseTimeSlot(slot2);

        // 如果兩個時段在同一天，並且有重疊的部分，則返回true
        const isSameDay =
            time1.start.getFullYear() === time2.start.getFullYear() &&
            time1.start.getMonth() === time2.start.getMonth() &&
            time1.start.getDate() === time2.start.getDate();

        return isSameDay && time1.start < time2.end && time2.start < time1.end;
    } catch (error) {
        console.error("解析時間段失敗:", slot1, slot2, error);
        return false;
    }
};

// 檢查兩個時間段是否完全相同
export const isSameTimeSlot = (slot1: string, slot2: string) => {
    try {
        const time1 = parseTimeSlot(slot1);
        const time2 = parseTimeSlot(slot2);

        // 如果兩個時段在同一天，並且有重疊的部分，則返回true
        const isSameDay =
            time1.start.getFullYear() === time2.start.getFullYear() &&
            time1.start.getMonth() === time2.start.getMonth() &&
            time1.start.getDate() === time2.start.getDate();

        return isSameDay && time1.start === time2.start && time2.end === time1.end;
    } catch (error) {
        console.error("解析時間段失敗:", slot1, slot2, error);
        return false;
    }
};

export const isTimeSlotAvailable = (person: Interviewer | Interviewee, targetSlot: string, scheduledInterviews: ScheduledInterview[]) => {
    // 檢查是否在可用時段內
    if (!Array.isArray(person.availability)) {
        console.warn(`面試官 ${person.name} 的可用時段不是有效的陣列`, person.availability);
        return false;
    }
    const available = person.availability.some((slot) => isOverlapping(slot, targetSlot) || isSameTimeSlot(slot, targetSlot));
    const isInterviewer = "specialization" in person;

    if (!available) return false;
    if (!isInterviewer && person.select_count && person.select_count > 0) return false;
    // 檢查是否已被安排在這個時段
    const alreadyScheduled = scheduledInterviews.some((interview) => {
        const slot = `${interview.startTime}/${interview.endTime}`;
        const isOccupied = isOverlapping(slot, targetSlot);
        return (
            isOccupied &&
            (isInterviewer
                ? interview.interviewers.map((i) => i.id).includes(person.id)
                : interview.interviewers.map((i) => i.id).includes(person.id))
        );
    });

    return !alreadyScheduled;
};

// 獲取所有可能的時間段
export const getAllTimeSlots = (interviewers: Interviewer[], interviewees: Interviewee[]) => {
    const allSlots = new Set<string>();
    // 收集所有面試官和應試者的時間段
    interviewers.forEach((interviewer) => {
        // 確保 availability 是陣列
        const availabilityArray = interviewer.availability;
        if (!Array.isArray(availabilityArray)) {
            console.warn(`面試官 ${interviewer.name} 的可用時段不是有效的陣列`, interviewer.availability);
            return false;
        }

        availabilityArray.forEach((slot) => {
            if (typeof slot === "string" && slot.includes("/")) {
                allSlots.add(slot.trim());
            }
        });
    });

    interviewees.forEach((interviewee) => {
        // 確保 availability 是陣列
        const availabilityArray = interviewee.availability;

        if (!Array.isArray(availabilityArray)) {
            console.warn(`應試者 ${interviewee.name} 的可用時段不是有效的陣列`, interviewee.availability);
            return false;
        }
        availabilityArray.forEach((slot) => {
            if (typeof slot === "string" && slot.includes("/")) {
                allSlots.add(slot.trim());
            }
        });
    });

    return Array.from(allSlots);
};

// 計算每個面試官已分配的面試次數
export const countInterviewerAssignments = (scheduledInterviews: ScheduledInterview[], interviewers: Interviewer[]) => {
    const counts = new Map<string, number>();

    // 初始化所有面試官的計數為0
    interviewers.forEach((interviewer) => {
        counts.set(interviewer.id, 0);
    });

    // 統計已分配的面試
    scheduledInterviews.forEach((interview) => {
        interview.interviewers
            .map((i) => i.id)
            .forEach((id) => {
                const currentCount = counts.get(id) || 0;
                counts.set(id, currentCount + 1);
            });
    });

    return counts;
};

/**
 * Parse raw CSV data into typed objects
 */
export function parseInterviewers(data: any[]): Interviewer[] {
    return data.map((row) => ({
        id: row.id?.toString() || String(Math.random()).slice(2, 10),
        name: row.name,
        email: row.email,
        availability: parseAvailability(row.availability), // 直接返回陣列
        specialization: row.specialization,
    }));
}

export function parseInterviewees(data: any[]): Interviewee[] {
    return data.map((row) => ({
        id: row.id?.toString() || String(Math.random()).slice(2, 10),
        name: row.name,
        email: row.email,
        position: row.position || row.positionApplied,
        positionApplied: row.positionApplied || row.position,
        availability: parseAvailability(row.availability), // 直接返回陣列
    }));
}

/**
 * Helper to parse availability from CSV format to array
 * Expects format like "2025-05-10T09:00/2025-05-10T10:00,2025-05-10T14:00/2025-05-10T15:00"
 */
function parseAvailability(availabilityStr: string | string[]): string[] {
    if (!availabilityStr) return [];

    // 處理 CSV 中的多個時間區段
    if (typeof availabilityStr === "string") {
        return availabilityStr
            .split(",")
            .map((slot) => slot.trim())
            .filter((slot) => slot.includes("/")); // 確保時間格式正確
    }

    // 如果已經是陣列格式，確保每個元素都是字串
    if (Array.isArray(availabilityStr)) {
        return availabilityStr
            .filter((slot): slot is string => typeof slot === "string")
            .map((slot) => slot.trim())
            .filter((slot) => slot.includes("/"));
    }

    return [];
}
