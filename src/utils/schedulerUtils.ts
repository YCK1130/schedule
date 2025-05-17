import type { GroupRestriction } from '../contexts/SchedulingContext';
import type { Interviewee, Interviewer, ScheduledInterview } from '../types';

interface ScheduleResult {
  interviews: ScheduledInterview[];
  unmatched: {
    interviewers: Interviewer[];
    interviewees: Interviewee[];
    reasons: string[];
  };
}

const checkGroupRestriction = (count: number, restriction: GroupRestriction): boolean => {
  switch (restriction.operator) {
    case '>':
      return count > restriction.count;
    case '<':
      return count < restriction.count;
    case '=':
      return count === restriction.count;
    case '>=':
      return count >= restriction.count;
    case '<=':
      return count <= restriction.count;
    default:
      return false;
  }
};

export function scheduleInterviews(
  interviewers: Interviewer[],
  interviewees: Interviewee[],
  groupRestrictions: {
    [key: string]: GroupRestriction;
  }
): ScheduleResult {
  console.log('進入排程函數', { 
    面試官人數: interviewers.length,
    應試者人數: interviewees.length,
    群組限制: groupRestrictions
  });

  const interviews: ScheduledInterview[] = [];
  const unmatched = {
    interviewers: [] as Interviewer[],
    interviewees: [] as Interviewee[],
    reasons: [] as string[]
  };

  try {
    // 將時段字符串轉換為 Date 對象進行比較
    const parseTimeSlot = (slot: string) => {
      const [start, end] = slot.split('/');
      return { start: new Date(start), end: new Date(end) };
    };

    // 檢查時段是否重疊
    const isOverlapping = (slot1: string, slot2: string) => {
      const time1 = parseTimeSlot(slot1);
      const time2 = parseTimeSlot(slot2);
      return time1.start < time2.end && time2.start < time1.end;
    };

    // 檢查某個時段是否已被佔用
    const isTimeSlotAvailable = (
      person: Interviewer | Interviewee,
      targetSlot: string,
      scheduledInterviews: ScheduledInterview[]
    ) => {
      // 檢查是否在可用時段內
      const available = person.availability
        ?.split(',')
        .some(slot => isOverlapping(slot, targetSlot));

      if (!available) {
        return false;
      }

      // 檢查是否已被安排在這個時段
      const alreadyScheduled = scheduledInterviews.some(interview => {
        const slot = `${interview.startTime}/${interview.endTime}`;
        const isOccupied = isOverlapping(slot, targetSlot);
        
        const isInterviewer = 'specialization' in person;
        return (isInterviewer ? 
          interview.interviewerIds.includes(person.id) :
          interview.intervieweeIds.includes(person.id)
        ) && isOccupied;
      });

      return !alreadyScheduled;
    };

    // 開始配對流程
    for (const interviewee of interviewees) {
      let matched = false;
      
      if (!interviewee.availability) {
        unmatched.interviewees.push(interviewee);
        unmatched.reasons.push(`應試者 ${interviewee.name} 沒有可用時段`);
        continue;
      }

      const timeSlots = interviewee.availability.split(',');

      for (const timeSlot of timeSlots) {
        // 尋找可用的面試官們
        const availableInterviewers = interviewers.filter(interviewer =>
          isTimeSlotAvailable(interviewer, timeSlot, interviews)
        );

        // 檢查面試官人數是否符合限制
        if (!checkGroupRestriction(availableInterviewers.length, groupRestrictions.interviewers)) {
          continue;
        }

        // 安排面試
        const [startTime, endTime] = timeSlot.split('/');
        const interview: ScheduledInterview = {
          interviewerIds: availableInterviewers.slice(0, groupRestrictions.interviewers.count).map(i => i.id),
          interviewerNames: availableInterviewers.slice(0, groupRestrictions.interviewers.count).map(i => i.name),
          intervieweeIds: [interviewee.id],
          intervieweeNames: [interviewee.name],
          startTime,
          endTime,
          position: interviewee.positionApplied
        };

        interviews.push(interview);
        matched = true;
        break;
      }

      if (!matched) {
        unmatched.interviewees.push(interviewee);
        unmatched.reasons.push(`無法為應試者 ${interviewee.name} 找到符合限制條件的時段`);
      }
    }

    // 檢查未被安排的面試官
    const scheduledInterviewerIds = new Set(interviews.flatMap(i => i.interviewerIds));
    const unmatchedInterviewers = interviewers.filter(interviewer => !scheduledInterviewerIds.has(interviewer.id));
    unmatched.interviewers.push(...unmatchedInterviewers);
    unmatchedInterviewers.forEach(interviewer => {
      unmatched.reasons.push(`面試官 ${interviewer.name} 未被安排任何面試`);
    });

    console.log('排程完成', {
      成功安排: interviews.length,
      未配對面試官: unmatched.interviewers.length,
      未配對應試者: unmatched.interviewees.length
    });

    return { interviews, unmatched };
  } catch (error) {
    console.error('排程過程中發生錯誤：', error);
    return { 
      interviews: [], 
      unmatched: {
        interviewers,
        interviewees,
        reasons: ['排程過程發生錯誤']
      }
    };
  }
}

/**
 * Parse raw CSV data into typed objects
 */
export function parseInterviewers(data: any[]): Interviewer[] {
  return data.map(row => ({
    id: row.id?.toString() || String(Math.random()).slice(2, 10),
    name: row.name,
    email: row.email,
    availability: parseAvailability(row.availability).join(','),
    specialization: row.specialization
  }));
}

export function parseInterviewees(data: any[]): Interviewee[] {
  return data.map(row => ({
    id: row.id?.toString() || String(Math.random()).slice(2, 10),
    name: row.name,
    email: row.email,
    positionApplied: row.positionApplied || row.position,
    availability: parseAvailability(row.availability).join(',')
  }));
}

/**
 * Helper to parse availability from CSV format to array
 * Expects format like "2025-05-10T09:00/2025-05-10T10:00,2025-05-10T14:00/2025-05-10T15:00"
 */
function parseAvailability(availabilityStr: string | string[]): string[] {
  if (!availabilityStr) return [];
  
  // 處理 CSV 中的多個時間區段
  if (typeof availabilityStr === 'string') {
    return availabilityStr.split(',')
      .map(slot => slot.trim())
      .filter(slot => slot.includes('/')); // 確保時間格式正確
  }
  
  // 如果已經是陣列格式，確保每個元素都是字串
  if (Array.isArray(availabilityStr)) {
    return availabilityStr
      .filter((slot): slot is string => typeof slot === 'string')
      .map(slot => slot.trim())
      .filter(slot => slot.includes('/'));
  }

  return [];
}