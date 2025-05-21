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
}> = ({ children, interviewers, interviewees, setScheduledInterviews, setUnmatchedResults }) => {
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
        const result = scheduleInterviews(interviewers, interviewees, checkResult.results);

        setScheduledInterviews(result.interviews);
        setUnmatchedResults(result.unmatched);
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
                    return { ...r, ...restriction };
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
