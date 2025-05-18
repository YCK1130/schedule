import type { GroupRestriction } from "../contexts/SchedulingContext";
import type { Interviewee, Interviewer, ScheduledInterview } from "../types";

interface ScheduleResult {
    interviews: ScheduledInterview[];
    unmatched: {
        interviewers: Interviewer[];
        interviewees: Interviewee[];
        reasons: string[];
    };
}

/**
 * 檢查約束條件
 */
const checkGroupRestriction = (count: number, restriction: GroupRestriction): boolean => {
    switch (restriction.operator) {
        case ">":
            return count > restriction.count;
        case "<":
            return count < restriction.count;
        case "=":
            return count === restriction.count;
        case ">=":
            return count >= restriction.count;
        case "<=":
            return count <= restriction.count;
        default:
            return false;
    }
};

/**
 * 檢查約束條件，並支援範圍設定
 * 當使用者設定一個範圍時，我們在 UI 會設定 operator 為 >=，
 * 但實際上我們需要同時考慮最小值和最大值
 */
const checkGroupRestrictionWithRange = (count: number, restriction: GroupRestriction, maxCount?: number): boolean => {
    // 基本運算符檢查
    const baseCheck = checkGroupRestriction(count, restriction);
    
    // 如果有提供 maxCount，則同時檢查上限
    if (maxCount !== undefined && restriction.operator === '>=') {
        return count >= restriction.count && count <= maxCount;
    }
    
    return baseCheck;
};

/**
 * 實現優化的貪婪算法來排程面試，優先考慮平衡面試官的分配
 */
export function scheduleInterviews(
    interviewers: Interviewer[],
    interviewees: Interviewee[],
    groupRestrictions: {
        [key: string]: GroupRestriction;
    },
    // 新增範圍最大值參數
    maxCounts?: {
        [key: string]: number;
    }
): ScheduleResult {
    console.log("進入排程函數", {
        面試官人數: interviewers.length,
        應試者人數: interviewees.length,
        群組限制: groupRestrictions,
        最大值設定: maxCounts,
    });

    const interviews: ScheduledInterview[] = [];
    const unmatched = {
        interviewers: [] as Interviewer[],
        interviewees: [] as Interviewee[],
        reasons: [] as string[],
    };

    try {
        // 將時段字符串轉換為 Date 對象進行比較
        const parseTimeSlot = (slot: string) => {
            const [start, end] = slot.split("/");
            return { start: new Date(start), end: new Date(end) };
        };

        // 檢查時段是否重疊（更寬鬆的條件）
        const isOverlapping = (slot1: string, slot2: string) => {
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
        const isSameTimeSlot = (slot1: string, slot2: string) => {
            return slot1 === slot2;
        };

        // 檢查某個時段是否已被佔用
        const isTimeSlotAvailable = (person: Interviewer | Interviewee, targetSlot: string, scheduledInterviews: ScheduledInterview[]) => {
            // 檢查是否在可用時段內
            const available = person.availability?.some((slot) => isOverlapping(slot, targetSlot) || isSameTimeSlot(slot, targetSlot));

            if (!available) {
                return false;
            }

            // 檢查是否已被安排在這個時段
            const alreadyScheduled = scheduledInterviews.some((interview) => {
                const slot = `${interview.startTime}/${interview.endTime}`;
                const isOccupied = isOverlapping(slot, targetSlot);

                const isInterviewer = "specialization" in person;
                return (isInterviewer ? interview.interviewerIds.includes(person.id) : interview.intervieweeIds.includes(person.id)) && isOccupied;
            });

            return !alreadyScheduled;
        };

        // 獲取所有可能的時間段
        const getAllTimeSlots = () => {
            const allSlots = new Set<string>();
            
            // 收集所有面試官和應試者的時間段
            interviewers.forEach(interviewer => {
                // 確保 availability 是陣列
                const availabilityArray = interviewer.availability;
                
                availabilityArray.forEach(slot => {
                    if (typeof slot === 'string' && slot.includes('/')) {
                        allSlots.add(slot.trim());
                    }
                });
            });
            
            interviewees.forEach(interviewee => {
                // 確保 availability 是陣列
                const availabilityArray = interviewee.availability;
                
                availabilityArray.forEach(slot => {
                    if (typeof slot === 'string' && slot.includes('/')) {
                        allSlots.add(slot.trim());
                    }
                });
            });
            
            return Array.from(allSlots);
        };

        // 計算每個面試官已分配的面試次數
        const countInterviewerAssignments = (scheduledInterviews: ScheduledInterview[]) => {
            const counts = new Map<string, number>();
            
            // 初始化所有面試官的計數為0
            interviewers.forEach(interviewer => {
                counts.set(interviewer.id, 0);
            });
            
            // 統計已分配的面試
            scheduledInterviews.forEach(interview => {
                interview.interviewerIds.forEach(id => {
                    const currentCount = counts.get(id) || 0;
                    counts.set(id, currentCount + 1);
                });
            });
            
            return counts;
        };

        // 優化的貪婪算法
        const optimizedGreedyMatching = () => {
            // 先確保所有時間段格式正確
            const validInterviewers = interviewers.filter(interviewer => 
                interviewer.availability && interviewer.availability.length > 0);
            const validInterviewees = interviewees.filter(interviewee => 
                interviewee.availability && interviewee.availability.length > 0);
                
            // 如果沒有有效的面試官或應試者，直接返回
            if (validInterviewers.length === 0 || validInterviewees.length === 0) {
                console.log("沒有有效的面試官或應試者");
                // 將所有無效的面試官和應試者標記為未匹配
                interviewers.filter(i => !i.availability || i.availability.length === 0)
                    .forEach(i => {
                        unmatched.interviewers.push(i);
                        unmatched.reasons.push(`面試官 ${i.name} 沒有可用時段`);
                    });
                interviewees.filter(i => !i.availability || i.availability.length === 0)
                    .forEach(i => {
                        unmatched.interviewees.push(i);
                        unmatched.reasons.push(`應試者 ${i.name} 沒有可用時段`);
                    });
                return;
            }

            // 收集所有可能的時間段
            const allTimeSlots = getAllTimeSlots();
            console.log(`共有 ${allTimeSlots.length} 個可能的時間段`);
            
            // 按時間順序排序時間段
            allTimeSlots.sort((a, b) => {
                const timeA = parseTimeSlot(a).start;
                const timeB = parseTimeSlot(b).start;
                return timeA.getTime() - timeB.getTime();
            });

            // 開始為每個時間段分配面試
            for (const timeSlot of allTimeSlots) {
                // 尋找這個時間段可用的應試者
                const availableInterviewees = validInterviewees.filter(interviewee => 
                    isTimeSlotAvailable(interviewee, timeSlot, interviews) &&
                    !unmatched.interviewees.includes(interviewee)
                );
                
                // 如果沒有可用的應試者，跳過這個時間段
                if (availableInterviewees.length === 0) continue;
                
                // 尋找這個時間段可用的面試官
                const availableInterviewers = validInterviewers.filter(interviewer => 
                    isTimeSlotAvailable(interviewer, timeSlot, interviews)
                );
                
                // 獲取面試官限制範圍
                const minInterviewers = groupRestrictions.interviewers.count || 2;
                const maxInterviewers = maxCounts?.interviewers || minInterviewers;
                
                // 如果沒有足夠的面試官，跳過這個時間段
                if (availableInterviewers.length < minInterviewers) continue;
                
                // 基於已分配次數和可用時間段數量排序面試官
                const interviewerAssignmentCounts = countInterviewerAssignments(interviews);
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
                const interviewerCount = Math.min(
                    availableInterviewers.length, 
                    maxInterviewers
                );
                
                // 至少要滿足最小數量要求
                if (interviewerCount < minInterviewers) continue;
                
                // 選擇所需數量的面試官
                const selectedInterviewers = sortedInterviewers.slice(0, interviewerCount);
                
                // 獲取應試者限制範圍
                const minInterviewees = groupRestrictions.interviewees.count || 1;
                const maxInterviewees = maxCounts?.interviewees || minInterviewees;
                
                // 決定要分配多少應試者，在範圍內儘量多分配
                const intervieweeCount = Math.min(
                    availableInterviewees.length,
                    maxInterviewees
                );
                
                // 至少要滿足最小數量要求
                if (intervieweeCount < minInterviewees) continue;
                
                const intervieweesToAssign = availableInterviewees.slice(0, intervieweeCount);
                
                // 創建面試安排
                const [startTime, endTime] = timeSlot.split('/');
                const interview: ScheduledInterview = {
                    interviewerIds: selectedInterviewers.map(i => i.id),
                    interviewerNames: selectedInterviewers.map(i => i.name),
                    intervieweeIds: intervieweesToAssign.map(i => i.id),
                    intervieweeNames: intervieweesToAssign.map(i => i.name),
                    startTime,
                    endTime
                };
                
                interviews.push(interview);
                console.log(`安排了面試: ${interview.intervieweeNames.join(', ')} 與 ${interview.interviewerNames.join(', ')} 在 ${startTime}`);
            }
            
            // 標記所有未分配的應試者
            const assignedIntervieweeIds = new Set(interviews.flatMap(i => i.intervieweeIds));
            const unmatchedInterviewees = validInterviewees.filter(interviewee => 
                !assignedIntervieweeIds.has(interviewee.id)
            );
            
            unmatchedInterviewees.forEach(interviewee => {
                if (!unmatched.interviewees.includes(interviewee)) {
                    unmatched.interviewees.push(interviewee);
                    unmatched.reasons.push(`無法為應試者 ${interviewee.name} 找到符合限制條件的時段`);
                }
            });
            
            // 標記所有未分配的面試官
            const assignedInterviewerIds = new Set(interviews.flatMap(i => i.interviewerIds));
            const unmatchedInterviewers = validInterviewers.filter(interviewer => 
                !assignedInterviewerIds.has(interviewer.id)
            );
            
            unmatchedInterviewers.forEach(interviewer => {
                if (!unmatched.interviewers.includes(interviewer)) {
                    unmatched.interviewers.push(interviewer);
                    unmatched.reasons.push(`面試官 ${interviewer.name} 未被安排任何面試`);
                }
            });
        };
        
        // 執行優化的貪婪匹配算法
        optimizedGreedyMatching();
        
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
