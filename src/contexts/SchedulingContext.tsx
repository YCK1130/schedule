import React, { createContext, useContext, useRef, useState } from "react";
import type { GroupRestriction, Interviewee, Interviewer, ScheduledInterview, UnmatchedResult } from "../types";
import { scheduleInterviews } from "../utils/algos/schedule";
import { checkConflict } from "../utils/schedulerUtils";

interface SchedulingContextType {
    groupRestrictions: {
        [key: string]: GroupRestriction[];
    };
    addRestriction: (groupId: string) => void;
    removeRestriction: (groupId: string, index: number) => void;
    updateGroupRestriction: (groupId: string, restrictionIndex: number, restriction: Partial<GroupRestriction>) => void;
    generateSchedule: () => void;
}

const SchedulingContext = createContext<SchedulingContextType | null>(null);

export const useScheduling = () => {
    const context = useContext(SchedulingContext);
    if (!context) {
        throw new Error("useScheduling must be used within a SchedulingProvider");
    }
    return context;
};

export const SchedulingProvider: React.FC<{
    children: React.ReactNode;
    interviewers: Interviewer[];
    interviewees: Interviewee[];
    setScheduledInterviews: React.Dispatch<React.SetStateAction<ScheduledInterview[]>>;
    setUnmatchedResults: React.Dispatch<React.SetStateAction<UnmatchedResult | null>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ children, interviewers, interviewees, setScheduledInterviews, setUnmatchedResults, setLoading }) => {
    const restrictionResultsRef = useRef<{
        results: Map<string, { min: number; max: number }>;
        lastUpdated: number;
    }>({
        results: new Map(),
        lastUpdated: 0,
    });

    // 使用一個新的狀態來儲存多個限制條件
    const [groupRestrictions, setGroupRestrictions] = useState<{
        [key: string]: GroupRestriction[];
    }>({
        interviewers: [
            {
                minCount: 1,
                maxCount: 3,
                targetPosition: "所有",
                groupName: "Interviewers",
            },
        ],
        interviewees: [
            {
                minCount: 3,
                maxCount: 3,
                targetPosition: "所有",
                groupName: "Interviewees",
            },
        ],
    });

    const generateSchedule = () => {
        // 使用緩存的限制檢查結果
        let checkResult;
        if (restrictionResultsRef.current.lastUpdated > 0) {
            checkResult = {
                results: restrictionResultsRef.current.results,
                conflict: false,
            };
        } else {
            checkResult = checkConflict(groupRestrictions);
            if (checkResult.results) {
                restrictionResultsRef.current = {
                    results: checkResult.results,
                    lastUpdated: Date.now(),
                };
            }
        }

        if (!checkResult.results && checkResult.conflict) {
            console.error("群組限制檢查失敗：", checkResult.conflict);
            return;
        }
        
        console.debug("開始排程...");
        setLoading(true);
        
        // 使用 setTimeout 將計算過程放到下一個事件迴圈，使 React 有機會先渲染 loading 狀態
        setTimeout(() => {
            try {
                const result = scheduleInterviews(interviewers, interviewees, checkResult.results);
                console.debug("排程結果：", result);
                setScheduledInterviews(result.interviews);
                setUnmatchedResults(result.unmatched);
            } catch (error) {
                console.error("排程過程中發生錯誤:", error);
            } finally {
                setLoading(false);
                console.debug("排程完成");
            }
        }, 0);
    };

    const updateGroupRestriction = (groupId: string, restrictionIndex: number, restriction: Partial<GroupRestriction>) => {
        // 每次更新限制參數時，重置限制檢查結果的快取
        restrictionResultsRef.current = {
            results: new Map(),
            lastUpdated: 0,
        };

        setGroupRestrictions((prev) => {
            const updatedRestrictions = prev[groupId].map((r, i) => {
                if (i === restrictionIndex) {
                    const updatedRestriction = { ...r };

                    // 處理 minCount 和 maxCount 的 null 值
                    // 當暫時為 null 時，保留原值；若有明確的新值則更新
                    Object.keys(restriction).forEach((key) => {
                        const typedKey = key as keyof GroupRestriction;
                        if (
                            (typedKey === "minCount" || typedKey === "maxCount") &&
                            restriction[typedKey] !== null &&
                            restriction[typedKey] !== undefined
                        ) {
                            // 確保值不是 null 或 undefined
                            // TypeScript 現在知道值不是 null 或 undefined
                            updatedRestriction[typedKey] = restriction[typedKey] as number;
                        } else if (typedKey !== "minCount" && typedKey !== "maxCount") {
                            // 處理非數值屬性
                            updatedRestriction[typedKey] = restriction[typedKey] as any;
                        }
                    });

                    return updatedRestriction;
                }
                return r;
            });
            return {
                ...prev,
                [groupId]: updatedRestrictions,
            };
        });
    };

    return (
        <SchedulingContext.Provider
            value={{
                groupRestrictions,
                addRestriction: (groupId) => {
                    // 新增限制時，清除快取
                    restrictionResultsRef.current = {
                        results: new Map(),
                        lastUpdated: 0,
                    };

                    setGroupRestrictions((prev) => {
                        const newRestriction: GroupRestriction = {
                            minCount: 1,
                            maxCount: 1,
                            targetPosition: "所有",
                            groupName: groupId === "interviewers" ? "Interviewers" : "Interviewees",
                        };
                        return {
                            ...prev,
                            [groupId]: [...prev[groupId], newRestriction],
                        };
                    });
                },
                removeRestriction: (groupId, index) => {
                    // 移除限制時，清除快取
                    restrictionResultsRef.current = {
                        results: new Map(),
                        lastUpdated: 0,
                    };

                    setGroupRestrictions((prev) => {
                        if (prev[groupId].length <= 1) {
                            return prev;
                        }
                        const updatedRestrictions = prev[groupId].filter((_, i) => i !== index);
                        return {
                            ...prev,
                            [groupId]: updatedRestrictions,
                        };
                    });
                },
                generateSchedule,
                updateGroupRestriction,
            }}
        >
            {children}
        </SchedulingContext.Provider>
    );
};
