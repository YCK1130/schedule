import React, { createContext, useContext, useEffect, useState } from "react";
import type { GroupType, Interviewee, Interviewer, ScheduledInterview, UnmatchedResult, ViewMode } from "../types";
import { getPositionsFromParticipants } from "../utils/positionUtils";

interface SlotData {
    date: Date;
    hour: number;
    minute: number;
    availableInterviewers: Interviewer[];
    availableInterviewees: Interviewee[];
    scheduledInterviews: ScheduledInterview[];
}

interface PreprocessedSlots {
    byDateAndTime: Map<string, SlotData>;
    initialized: boolean;
}

interface DataSaveContextType {
    interviewers: Interviewer[];
    interviewees: Interviewee[];
    onInterviewersLoaded: (data: Interviewer[]) => void;
    onIntervieweesLoaded: (data: Interviewee[]) => void;
    dataLoaded: {
        interviewers: boolean;
        interviewees: boolean;
    };
    scheduledInterviews: ScheduledInterview[];
    displayInfo: {
        startDate: Date;
        daysToShow: number;
        earliestTime: number;
        latestTime: number;
    };
    positions: Record<GroupType, string[]>;
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    setScheduledInterviews: React.Dispatch<React.SetStateAction<ScheduledInterview[]>>;
    unmatchedResults: UnmatchedResult | null;
    setUnmatchedResults: React.Dispatch<React.SetStateAction<UnmatchedResult | null>>;
    preprocessedSlots: PreprocessedSlots;
    getSlotData: (date: Date, hour: number, minute: number) => SlotData | null;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataSaveContext = createContext<DataSaveContextType | null>(null);

export const useDataSave = () => {
    const context = useContext(DataSaveContext);
    if (!context) {
        throw new Error("useDataSave must be used within a DataSaveProvider");
    }
    return context;
};

export const DataSaveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [interviewers, setInterviewers] = useState<Interviewer[]>([]);
    const [interviewees, setInterviewees] = useState<Interviewee[]>([]);
    const [scheduledInterviews, setScheduledInterviews] = useState<ScheduledInterview[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [unmatchedResults, setUnmatchedResults] = useState<UnmatchedResult | null>(null);
    const [viewMode, setViewMode] = useState<ViewMode>("unmatched");
    // 新增：用來存儲日期和時間範圍的計算結果
    const [displayInfo, setDisplayInfo] = useState({
        startDate: new Date(),
        daysToShow: 7,
        earliestTime: 9,
        latestTime: 17,
    });
    const [positions, setPositions] = useState<Record<GroupType, string[]>>({
        interviewers: ["所有"],
        interviewees: ["所有"],
    });

    const [preprocessedSlots, setPreprocessedSlots] = useState<PreprocessedSlots>({
        byDateAndTime: new Map(),
        initialized: false,
    });

    const dataLoaded = {
        interviewers: interviewers.length > 0,
        interviewees: interviewees.length > 0,
    };

    const getSlotKey = (date: Date, hour: number, minute: number) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}-${String(hour).padStart(2, "0")}-${String(minute).padStart(2, "0")}`;
    };
    const preprocessSlots = async () => {
        const profilerStart = performance.now();
        console.debug("進入預處理");
        const newSlots = new Map<string, SlotData>();
        const { startDate, daysToShow, earliestTime, latestTime } = displayInfo;

        // 生成所有日期
        const allDates = [];
        for (let i = 0; i < daysToShow; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            allDates.push(date);
        }
        allDates.forEach((date) => {
            for (let hour = earliestTime; hour <= latestTime; hour++) {
                [0, 30].forEach((minute) => {
                    const checkDate = new Date(date);
                    checkDate.setHours(hour, minute, 0, 0);
                    const key = getSlotKey(date, hour, minute);
                    newSlots.set(key, {
                        date: new Date(checkDate),
                        hour,
                        minute,
                        availableInterviewers: [],
                        availableInterviewees: [],
                        scheduledInterviews: [],
                    });
                });
            }
        });
        console.debug("所有時間槽:", newSlots);
        interviewers.forEach((interviewer) => {
            if (!interviewer.availability || !Array.isArray(interviewer.availability)) return;
            interviewer.availability.forEach((slot) => {
                if (!slot.includes("/") && !slot.includes(":")) return;
                const [startTime, endTime] = slot.split("/");
                const startDate = new Date(startTime);
                const endDate = new Date(endTime);
                // while (startDate.getTime() < endDate.getTime()) {
                // }
                const sHour = startDate.getHours();
                const sMinute = startDate.getMinutes();
                const key = getSlotKey(startDate, sHour, Math.round(sMinute / 60 + 1e-3) * 30);
                startDate.setMinutes(startDate.getMinutes() + 30);
                const originalSlot = newSlots.get(key);
                originalSlot?.availableInterviewers.push(interviewer);
            });
        });
        interviewees.forEach((interviewee) => {
            if (!interviewee.availability || !Array.isArray(interviewee.availability)) return;
            interviewee.availability.forEach((slot) => {
                if (!slot.includes("/") && !slot.includes(":")) return;
                const [startTime, endTime] = slot.split("/");
                const startDate = new Date(startTime);
                const endDate = new Date(endTime);
                // while (startDate.getTime() < endDate.getTime()) {
                // }
                const sHour = startDate.getHours();
                const sMinute = startDate.getMinutes();
                const key = getSlotKey(startDate, sHour, Math.round(sMinute / 60 + 1e-3) * 30);
                startDate.setMinutes(startDate.getMinutes() + 30);
                const originalSlot = newSlots.get(key);
                originalSlot?.availableInterviewees.push(interviewee);
            });
        });
        scheduledInterviews.forEach((interview) => {
            const startTime = new Date(interview.startTime);
            const endTime = new Date(interview.endTime);
            while (startTime.getTime() < endTime.getTime()) {
                const sHour = startTime.getHours();
                const sMinute = startTime.getMinutes();
                const key = getSlotKey(startTime, sHour, Math.round(sMinute / 60 + 1e-3) * 30);
                startTime.setMinutes(startTime.getMinutes() + 30);
                const originalSlot = newSlots.get(key);
                if (originalSlot) {
                    originalSlot.scheduledInterviews.push(interview);
                }
            }
        });

        setPreprocessedSlots({
            byDateAndTime: newSlots,
            initialized: true,
        });
        // console.log("預處理時間槽:", newSlots);
        const profilerEnd = performance.now();
        console.debug("預處理時間槽完成, 耗時:", profilerEnd - profilerStart, "毫秒");
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        preprocessSlots();
    }, [interviewers, interviewees, displayInfo, scheduledInterviews]);

    useEffect(() => {
        if (interviewers.length === 0 && interviewees.length === 0) return;

        const allAvailabilities = [...interviewers.flatMap((i) => i.availability || []), ...interviewees.flatMap((i) => i.availability || [])].filter(
            Boolean
        );

        if (allAvailabilities.length === 0) {
            const today = new Date();
            const monday = new Date(today);
            monday.setDate(today.getDate() - today.getDay() + 1);
            setDisplayInfo({
                startDate: monday,
                daysToShow: 7,
                earliestTime: 9,
                latestTime: 17,
            });
            return;
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

        const positions: Record<GroupType, string[]> = {
            interviewers: ["所有"],
            interviewees: ["所有"],
        };

        if (interviewers.length > 0) {
            positions.interviewers = getPositionsFromParticipants(interviewers);
        }

        if (interviewees.length > 0) {
            positions.interviewees = getPositionsFromParticipants(interviewees);
        }
        setPositions(positions);
        setDisplayInfo({
            startDate: minDate,
            daysToShow: totalDays,
            earliestTime,
            latestTime: latestTime + 1,
        });
    }, [interviewers, interviewees]);

    const onIntervieweesLoaded = (data: Interviewee[]) => {
        const processedData = data.map((interviewee) => {
            if (!interviewee.availability || !Array.isArray(interviewee.availability)) {
                if (typeof interviewee.availability === "string") {
                    return {
                        ...interviewee,
                        availability: interviewee.availability
                            .split(",")
                            .map((slot) => slot.trim())
                            .filter((slot) => slot.includes("/")),
                    };
                }
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
        const processedData = data.map((interviewer) => {
            if (!interviewer.availability || !Array.isArray(interviewer.availability)) {
                if (typeof interviewer.availability === "string") {
                    return {
                        ...interviewer,
                        availability: interviewer.availability
                            .split(",")
                            .map((slot) => slot.trim())
                            .filter((slot) => slot.includes("/")),
                    };
                }

                return {
                    ...interviewer,
                    availability: [],
                };
            }
            return interviewer;
        });

        setInterviewers(processedData);
    };

    const getSlotData = (date: Date, hour: number, minute: number): SlotData | null => {
        const key = getSlotKey(date, hour, minute);
        return preprocessedSlots.byDateAndTime.get(key) || null;
    };

    return (
        <DataSaveContext.Provider
            value={{
                interviewers,
                interviewees,
                scheduledInterviews,
                unmatchedResults,
                dataLoaded,
                displayInfo,
                viewMode,
                positions,
                setViewMode,
                setUnmatchedResults,
                onInterviewersLoaded,
                onIntervieweesLoaded,
                setScheduledInterviews,
                preprocessedSlots,
                getSlotData,
                loading,
                setLoading,
            }}
        >
            {children}
        </DataSaveContext.Provider>
    );
};
