import type { Interviewee, Interviewer, ScheduledInterview } from "../../types";
import type { PreprocessedSlots } from "../schedulerUtils";
import { checkRestrictions, getAllTimeSlots, isTimeSlotAvailable, parseTimeSlot } from "../schedulerUtils";
// 優化的貪婪算法
export const optimizedGreedyMatching = (
    interviewers: Interviewer[],
    interviewees: Interviewee[],
    groupRestrictions: Map<string, { min: number; max: number }>,
    preprocessedSlots?: PreprocessedSlots
) => {
    // 先確保所有時間段格式正確
    // console.log("interviewers:", interviewers);
    // console.log("interviewees:", interviewees);
    // console.log("groupRestrictions:", groupRestrictions);
    // console.log("preprocessedSlots:", preprocessedSlots);
    const unmatched = {
        interviewers: [] as Interviewer[],
        interviewees: [] as Interviewee[],
        reasons: [] as string[],
    };
    const interviews: ScheduledInterview[] = [];
    const validInterviewers = interviewers.filter((interviewer) => interviewer.availability.length > 0);
    const validInterviewees = interviewees.filter((interviewee) => interviewee.availability.length > 0);
    
    // 追蹤每個面試官的面試次數
    const interviewerAssignmentCounts = new Map<string, number>();
    validInterviewers.forEach(interviewer => {
        interviewerAssignmentCounts.set(interviewer.id, 0);
    });
    
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
    let allTimeSlots = getAllTimeSlots(interviewers, interviewees);
    // 使用預處理資料來排序時間段（按照可用人數從少到多）
    if (preprocessedSlots && preprocessedSlots.initialized) {
        console.debug("使用預處理資料來排序時間段");
        
        // 計算每個時間段的可用人數，並用於排序
        allTimeSlots=allTimeSlots.sort((a, b) => {
            const slotAData = getSlotDataForTimeSlot(a, preprocessedSlots);
            const slotBData = getSlotDataForTimeSlot(b, preprocessedSlots);
            
            const availableForSlotA = (slotAData?.availableInterviewers.length || 0) + (slotAData?.availableInterviewees.length || 0);
            const availableForSlotB = (slotBData?.availableInterviewers.length || 0) + (slotBData?.availableInterviewees.length || 0);
            
            // 優先安排可用人數最少的時間段
            if (availableForSlotA !== availableForSlotB) {
                return availableForSlotA - availableForSlotB; // 升序排列，可用人數少的優先
            }
            
            // 如果可用人數相同，則按照時間順序排序
            const timeA = parseTimeSlot(a).start;
            const timeB = parseTimeSlot(b).start;
            return timeA.getTime() - timeB.getTime();
        });
    } else {
        // 如果沒有預處理資料，則使用原始的排序邏輯
        allTimeSlots= allTimeSlots.sort((a, b) => {
            // 計算每個時間段的可用人數（面試官 + 應試者）
            const availableForSlotA = validInterviewers.filter(interviewer => 
                isTimeSlotAvailable(interviewer, a, interviews)
            ).length + validInterviewees.filter(interviewee => 
                isTimeSlotAvailable(interviewee, a, interviews)
            ).length;
            
            const availableForSlotB = validInterviewers.filter(interviewer => 
                isTimeSlotAvailable(interviewer, b, interviews)
            ).length + validInterviewees.filter(interviewee => 
                isTimeSlotAvailable(interviewee, b, interviews)
            ).length;
            
            // 優先安排可用人數最少的時間段
            if (availableForSlotA !== availableForSlotB) {
                return availableForSlotA - availableForSlotB; // 升序排列，可用人數少的優先
            }
            
            // 如果可用人數相同，則按照時間順序排序
            const timeA = parseTimeSlot(a).start;
            const timeB = parseTimeSlot(b).start;
            return timeA.getTime() - timeB.getTime();
        });
    }
    

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
    validInterviewers.forEach((interviewer) => {
        if (interviewer.origin_availability) {
            interviewer.availability = interviewer.origin_availability;
        }
    });
    
    // 為每個職位組的應試者分配面試時間
    for (const position in intervieweesByPosition) {
        // 開始為每個時間段分配面試
        for (const timeSlot of allTimeSlots) {
            // 使用預處理資料來快速獲取這個時間段可用的應試者
            let availableInterviewees: Interviewee[] = [];
            
            if (preprocessedSlots && preprocessedSlots.initialized) {
                const slotData = getSlotDataForTimeSlot(timeSlot, preprocessedSlots);
                if (slotData) {
                    // 過濾出符合條件的應試者（同職位且未分配）
                    availableInterviewees = slotData.availableInterviewees.filter(
                        (interviewee) => 
                            (interviewee.position === position || position === "未指定") && 
                            !assignedIntervieweeIds.has(interviewee.id)
                    );
                }
            } else {
                // 使用原始邏輯
                const positionInterviewees = intervieweesByPosition[position];
                availableInterviewees = positionInterviewees.filter(
                    (interviewee) =>
                        isTimeSlotAvailable(interviewee, timeSlot, interviews) &&
                        !assignedIntervieweeIds.has(interviewee.id)
                );
            }

            // 如果沒有可用的應試者，跳過這個時間段
            if (availableInterviewees.length === 0) continue;

            // 使用預處理資料來快速獲取這個時間段可用的面試官
            let availableInterviewers: Interviewer[] = [];
            
            if (preprocessedSlots && preprocessedSlots.initialized) {
                const slotData = getSlotDataForTimeSlot(timeSlot, preprocessedSlots);
                if (slotData) {
                    availableInterviewers = slotData.availableInterviewers.filter(interviewer => 
                        !interviews.some(interview => {
                            const slot = `${interview.startTime}/${interview.endTime}`;
                            return isOverlappingTimeSlot(slot, timeSlot) && interview.interviewers.some(i => i.id === interviewer.id);
                        })
                    );
                    
                    // 按照面試官已安排的面試次數排序
                    availableInterviewers.sort((a, b) => {
                        const countA = interviewerAssignmentCounts.get(a.id) || 0;
                        const countB = interviewerAssignmentCounts.get(b.id) || 0;
                        return countA - countB; // 優先選擇分配次數少的面試官
                    });
                }
            } else {
                // 使用原始邏輯
                availableInterviewers = validInterviewers.filter((interviewer) => 
                    isTimeSlotAvailable(interviewer, timeSlot, interviews)
                );
                
                // 按照面試官已安排的面試次數排序
                availableInterviewers.sort((a, b) => {
                    const countA = interviewerAssignmentCounts.get(a.id) || 0;
                    const countB = interviewerAssignmentCounts.get(b.id) || 0;
                    return countA - countB; // 優先選擇分配次數少的面試官
                });
            }

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
            
            // 更新面試官的面試次數計數
            result.interviewers.forEach((interviewer) => {
                const currentCount = interviewerAssignmentCounts.get(interviewer.id) || 0;
                interviewerAssignmentCounts.set(interviewer.id, currentCount + 1);
                
                if (Array.isArray(interviewer.availability)) {
                    interviewer.availability = interviewer.availability.filter((slot) => !isOverlappingTimeSlot(slot, timeSlot));
                }
            });
        }
    }
    
    // 填滿可以填滿的 interviews
    for (const inter of interviews) {
        const ints = inter.interviewers.map((i) => i.id);
        // 尋找這個時間段可用的面試官
        const timeSlot = `${inter.startTime}/${inter.endTime}`;
        
        let availableInters: Interviewer[] = [];
        
        if (preprocessedSlots && preprocessedSlots.initialized) {
            const slotData = getSlotDataForTimeSlot(timeSlot, preprocessedSlots);
            if (slotData) {
                availableInters = slotData.availableInterviewers.filter(interviewer => 
                    !ints.includes(interviewer.id) && 
                    !interviews.some(interview => {
                        if (interview === inter) return false; // 跳過當前面試
                        const slot = `${interview.startTime}/${interview.endTime}`;
                        return isOverlappingTimeSlot(slot, timeSlot) && interview.interviewers.some(i => i.id === interviewer.id);
                    })
                );
            }
        } else {
            availableInters = validInterviewers.filter(
                (interviewer) => isTimeSlotAvailable(interviewer, timeSlot, interviews.filter(iv => iv !== inter)) && !ints.includes(interviewer.id)
            );
        }

        const existPosition = Array.from(groupRestrictions.keys())
            .map((i) => i.split(":")[1])
            .filter((i) => i !== "所有");
        
        // 按照面試官已安排的面試次數排序
        const sortedInters = availableInters.sort((a, b) => {
            const countA = interviewerAssignmentCounts.get(a.id) || 0;
            const countB = interviewerAssignmentCounts.get(b.id) || 0;
            if (countA !== countB) {
                return countA - countB; // 優先選擇分配次數少的面試官
            }
            return a.availability.length - b.availability.length;
        });
        
        const { max } = groupRestrictions.get("interviewers:所有") || { min: 1, max: 100 };
        const numTargets = sortedInters.filter((interviewer) => !existPosition.includes(`${interviewer.position}`));
        const interviewersCount = Math.min(numTargets.length + ints.length, max) - ints.length;
        if (interviewersCount > 0) {
            const selectedInters = sortedInters.slice(0, interviewersCount);
            inter.interviewers.push(...selectedInters.map((i) => ({ id: i.id, name: i.name, position: i.position })));
            
            // 更新選中面試官的面試次數
            selectedInters.forEach(interviewer => {
                const currentCount = interviewerAssignmentCounts.get(interviewer.id) || 0;
                interviewerAssignmentCounts.set(interviewer.id, currentCount + 1);
            });
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

    return {
        interviews: interviews.map((interview, id) => ({ ...interview, id: id + 1 })),
        unmatched: {
            interviewers: validInterviewers, // 因為沒有面試官沒有次數限制，且前面已經剔除他的已用時間，我們顯示所有面試官剩下的時間
            interviewees: unmatchedInterviewees,
            reasons: unmatched.reasons,
        },
    };
};

// 檢查兩個時間段是否重疊的輔助函數
function isOverlappingTimeSlot(slot1: string, slot2: string): boolean {
    try {
        const [start1, end1] = slot1.split("/");
        const [start2, end2] = slot2.split("/");
        
        const startDate1 = new Date(start1);
        const endDate1 = new Date(end1);
        const startDate2 = new Date(start2);
        const endDate2 = new Date(end2);
        
        return startDate1 < endDate2 && startDate2 < endDate1;
    } catch (error) {
        console.error("解析時間段失敗:", slot1, slot2, error);
        return false;
    }
}

// 從預處理資料中獲取特定時間段的資料
function getSlotDataForTimeSlot(timeSlot: string, preprocessedSlots: PreprocessedSlots) {
    try {
        const [startTime] = timeSlot.split("/");
        const startDate = new Date(startTime);
        
        const year = startDate.getFullYear();
        const month = String(startDate.getMonth() + 1).padStart(2, "0");
        const day = String(startDate.getDate()).padStart(2, "0");
        const hour = String(startDate.getHours()).padStart(2, "0");
        const minute = String(Math.round(startDate.getMinutes() / 30) * 30).padStart(2, "0");
        
        const key = `${year}-${month}-${day}-${hour}-${minute}`;
        return preprocessedSlots.byDateAndTime.get(key);
    } catch (error) {
        console.error("從預處理資料獲取時間段資料失敗:", timeSlot, error);
        return null;
    }
}
