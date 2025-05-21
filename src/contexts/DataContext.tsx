import React, { createContext, useContext, useEffect, useState } from "react";
import type { GroupType, Interviewee, Interviewer, ScheduledInterview, UnmatchedResult, ViewMode } from "../types";
import { getPositionsFromParticipants } from "../utils/positionUtils";

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

    const [unmatchedResults, setUnmatchedResults] = useState<UnmatchedResult | null>(null);
    const [viewMode, setViewMode] = useState<ViewMode>("scheduled");
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

    const dataLoaded = {
        interviewers: interviewers.length > 0,
        interviewees: interviewees.length > 0,
    };

    // 只在資料載入時計算一次日期和時間範圍
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
    }, [interviewers.length, interviewees.length]);

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
            }}
        >
            {children}
        </DataSaveContext.Provider>
    );
};
