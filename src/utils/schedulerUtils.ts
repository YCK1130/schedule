import type { GroupRestriction } from "../contexts/SchedulingContext";
import type { Interviewee, Interviewer, ScheduledInterview } from "../types";

export interface ScheduleResult {
    interviews: ScheduledInterview[];
    unmatched: {
        interviewers: Interviewer[];
        interviewees: Interviewee[];
        reasons: string[];
    };
}


/**
 * 檢查約束條件，並支援範圍設定
 * 當使用者設定一個範圍時，我們在 UI 會設定 operator 為 >=，
 * 但實際上我們需要同時考慮最小值和最大值
 */
// const checkGroupRestrictionWithRange = (count: number, restriction: GroupRestriction, maxCount?: number): boolean => {
//     // 基本運算符檢查
//     const baseCheck = checkGroupRestriction(count, restriction);

//     // 如果有提供 maxCount，則同時檢查上限
//     if (maxCount !== undefined && restriction.operator === ">=") {
//         return count >= restriction.count && count <= maxCount;
//     }

//     return baseCheck;
// };

/**
 * 取得特定群組的範圍限制
 * 從多個限制條件中找出適合特定職位的條件
 */
export const getRestrictionRange = (restrictions: GroupRestriction[], position: string = "所有"): { min: number; max: number } => {
    // 尋找匹配職位的限制條件
    const matchedRestrictions = restrictions.filter((r) => r.targetPosition === position || r.targetPosition === "所有" || !r.targetPosition);

    if (matchedRestrictions.length === 0) {
        // 如果沒有匹配的條件，使用預設值
        return { min: 1, max: 10 };
    }

    // 從所有匹配的條件中找出最嚴格的限制
    let min = 1;
    let max = 10;

    matchedRestrictions.forEach((restriction) => {
        // 使用 minCount 和 maxCount 或 count
        const minValue = restriction.minCount;
        const maxValue = restriction.maxCount;

        // 更新最小值和最大值
        min = Math.max(min, minValue || 1);
        max = Math.min(max, maxValue || 1000000); // 假設最大值不會超過 100000
    });

    return { min, max };
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
        return isOccupied && (isInterviewer ? interview.interviewerIds.includes(person.id) : interview.intervieweeIds.includes(person.id));
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
      interview.interviewerIds.forEach((id) => {
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
