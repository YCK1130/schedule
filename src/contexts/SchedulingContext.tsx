import React, { createContext, useContext, useMemo, useState } from "react";
import type { Interviewee, Interviewer, ScheduledInterview } from "../types";
import { scheduleInterviews } from "../utils/schedulerUtils";

export type ComparisonOperator = ">" | "<" | "=" | ">=" | "<=";

export interface GroupRestriction {
    minCount: number; // 新增：最小值，用於範圍限制
    maxCount: number; // 新增：最大值，用於範圍限制
    groupName: string;
    targetPosition: string; // 目標職位
}

interface UnmatchedResult {
    interviewers: Interviewer[];
    interviewees: Interviewee[];
    reasons: string[];
}

interface SchedulingContextType {
    interviewers: Interviewer[];
    interviewees: Interviewee[];
    scheduledInterviews: ScheduledInterview[];
    unmatchedResults: UnmatchedResult | null;
    dataLoaded: {
        interviewers: boolean;
        interviewees: boolean;
    };
    displayInfo: {
        startDate: Date;
        daysToShow: number;
        earliestTime: number;
        latestTime: number;
    };
    groupRestrictions: {
        [key: string]: GroupRestriction[];
    };
    maxCounts: {
        [key: string]: number;
    };
    updateMaxCount: (groupId: string, count: number) => void;
    addRestriction: (groupId: string) => void;
    removeRestriction: (groupId: string, index: number) => void;
    updateAllRestrictions: (groupId: string, restrictions: GroupRestriction[]) => void;
    updateGroupRestriction: (groupId: string, restrictionIndex: number, restriction: Partial<GroupRestriction>) => void;
    //   setInterviewers: (data: Interviewer[]) => void;
    //   setInterviewees: (data: Interviewee[]) => void;
    onInterviewersLoaded: (data: Interviewer[]) => void;
    onIntervieweesLoaded: (data: Interviewee[]) => void;
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

export const SchedulingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [interviewers, setInterviewers] = useState<Interviewer[]>([]);
    const [interviewees, setInterviewees] = useState<Interviewee[]>([]);
    const [scheduledInterviews, setScheduledInterviews] = useState<ScheduledInterview[]>([]);
    const [unmatchedResults, setUnmatchedResults] = useState<UnmatchedResult | null>(null);

    // 使用一個新的狀態來儲存多個限制條件
    const [groupRestrictions, setGroupRestrictions] = useState<{
        [key: string]: GroupRestriction[];
    }>({
        interviewers: [
            {
                minCount: 3,
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

    const [maxCounts, setMaxCounts] = useState<{
        [key: string]: number;
    }>({
        interviewers: 2,
        interviewees: 2,
    });

    const dataLoaded = {
        interviewers: interviewers.length > 0,
        interviewees: interviewees.length > 0,
    };

    const generateSchedule = () => {
        console.log("開始配對程序", {
            interviewers: interviewers.length,
            interviewees: interviewees.length,
            groupRestrictions,
            maxCounts,
        });

        const result = scheduleInterviews(interviewers, interviewees, groupRestrictions, maxCounts);
        console.log("配對結果：", result);

        setScheduledInterviews(result.interviews);
        setUnmatchedResults(result.unmatched);
    };

    const { startDate, daysToShow, earliestTime, latestTime } = useMemo(() => {
        const allAvailabilities = [...interviewers.flatMap((i) => i.availability || []), ...interviewees.flatMap((i) => i.availability || [])].filter(
            Boolean
        );

        if (allAvailabilities.length === 0) {
            const today = new Date();
            const monday = new Date(today);
            monday.setDate(today.getDate() - today.getDay() + 1);
            return { startDate: monday, daysToShow: 7, earliestTime: 9, latestTime: 17 };
        }

        const dates = allAvailabilities
            .flatMap((slot) => {
                const [start] = slot.split("/");
                return new Date(start);
            })
            .filter((date) => !isNaN(date.getTime()));

        const minDate = new Date(Math.min(...dates.map((d) => d.getTime())));
        const maxDate = new Date(Math.max(...dates.map((d) => d.getTime())));

        const totalDays = Math.ceil((maxDate.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

        const earliestTime = allAvailabilities.reduce((earliest, slot) => {
            const [start] = slot.split("/");
            const startTime = new Date(start);
            return startTime.getHours() < earliest ? startTime.getHours() : earliest;
        }, 23);

        const latestTime = allAvailabilities.reduce((latest, slot) => {
            const [, end] = slot.split("/");
            const endTime = new Date(end);
            return endTime.getHours() > latest ? endTime.getHours() : latest;
        }, 0);

        return {
            startDate: minDate,
            daysToShow: totalDays,
            earliestTime,
            latestTime: latestTime + 1,
        };
    }, [interviewers, interviewees]);

    const onIntervieweesLoaded = (data: Interviewee[]) => {
        console.log("面試者資料已加載：", data);
        const processedData = data.map((interviewee) => {
            // 如果 availability 不存在或不是數組，則初始化為空數組
            if (!interviewee.availability || !Array.isArray(interviewee.availability)) {
                //   console.warn(`修正面試者 ${interviewee.name} 的 availability 格式`, interviewee.availability);

                // 如果 availability 是字符串，嘗試解析成數組
                if (typeof interviewee.availability === "string") {
                    return {
                        ...interviewee,
                        availability: interviewee.availability
                            .split(",")
                            .map((slot) => slot.trim())
                            .filter((slot) => slot.includes("/")),
                    };
                }

                // 其他情況，設為空數組
                return {
                    ...interviewee,
                    availability: [],
                };
            }
            return interviewee;
        });
        setInterviewees(processedData);
    };
    const onInterviewersLoaded = (data: Interviewer[]) => {
        console.log("面試者資料已加載：", data);
        // 確保每個面試者的 availability 都是數組

        const processedData = data.map((interviewer) => {
            // 如果 availability 不存在或不是數組，則初始化為空數組
            if (!interviewer.availability || !Array.isArray(interviewer.availability)) {
                //   console.warn(`修正面試官 ${interviewer.name} 的 availability 格式`, interviewer.availability);

                // 如果 availability 是字符串，嘗試解析成數組
                if (typeof interviewer.availability === "string") {
                    return {
                        ...interviewer,
                        availability: interviewer.availability
                            .split(",")
                            .map((slot) => slot.trim())
                            .filter((slot) => slot.includes("/")),
                    };
                }

                // 其他情況，設為空數組
                return {
                    ...interviewer,
                    availability: [],
                };
            }
            return interviewer;
        });

        setInterviewers(processedData);
    };
    const updateGroupRestriction = (groupId: string, restrictionIndex: number, restriction: Partial<GroupRestriction>) => {
        console.log(`更新 ${groupId} 群組限制 ${restrictionIndex}：`, restriction);
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
                interviewers,
                interviewees,
                scheduledInterviews,
                unmatchedResults,
                dataLoaded,
                displayInfo: {
                    startDate,
                    daysToShow,
                    earliestTime,
                    latestTime,
                },
                groupRestrictions,
                maxCounts,
                onInterviewersLoaded,
                onIntervieweesLoaded,
                updateMaxCount: (groupId, count) => {
                    console.log(`更新 ${groupId} 最大限制：`, count);
                    setMaxCounts((prev) => ({
                        ...prev,
                        [groupId]: count,
                    }));
                },
                addRestriction: (groupId) => {
                    console.log(`增加 ${groupId} 群組限制`);
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
                    console.log(`移除 ${groupId} 群組限制 ${index}`);
                    // 至少保留一個限制條件
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
                updateAllRestrictions: (groupId, restrictions) => {
                    console.log(`更新所有 ${groupId} 群組限制：`, restrictions);
                    setGroupRestrictions((prev) => ({
                        ...prev,
                        [groupId]: restrictions,
                    }));
                },
                generateSchedule,
                updateGroupRestriction,
            }}
        >
            {children}
        </SchedulingContext.Provider>
    );
};
