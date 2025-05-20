import React, { useLayoutEffect, useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useScheduling } from "../../contexts/SchedulingContext";
import type { ScheduledInterview } from "../../types";
import CalendarTimeSlot from "./CalendarTimeSlot";

import { getDates, getInterviewColor } from "../../utils/calendar";
interface CalendarGridProps {
    scheduledInterviews: ScheduledInterview[];
}

interface InterviewSlot extends ScheduledInterview {
    isStart: boolean;
    isEnd: boolean;
    colorIndex: number;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ scheduledInterviews }) => {
    const {
        interviewers,
        interviewees,
        unmatchedResults,
        viewMode,
        displayInfo: { startDate, daysToShow, earliestTime, latestTime },
    } = useScheduling();

    // 為每個面試分配一個唯一的顏色索引
    const interviewColors = useMemo(() => {
        const colorMap = new Map<string, number>();
        scheduledInterviews.forEach((interview, index) => {
            const interviewKey = `${interview.interviewees.map(idx=>idx.id).join("-")}-${interview.startTime}`;
            colorMap.set(interviewKey, index % 8); // 最多使用8種顏色循環
        });
        return colorMap;
    }, [scheduledInterviews]);

    // 時間槽
    const timeSlots: string[] = useMemo(() => {
        const slots: string[] = [];
        for (let hour = earliestTime; hour <= latestTime; hour++) {
            slots.push(`${String(hour).padStart(2, "0")}:00`);
            slots.push(`${String(hour).padStart(2, "0")}:30`);
        }
        return slots;
    }, [earliestTime, latestTime, daysToShow, startDate]);

    const getTimeSlotInterviews = (date: Date, timeSlot: string): InterviewSlot[] => {
        const [hours, minutes] = timeSlot.split(":");
        const checkDate = new Date(date);
        checkDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

        const currentSlotTime = checkDate.getTime();
        const slotDuration = 30 * 60 * 1000; // 30 minutes in milliseconds

        return scheduledInterviews
            .filter((interview) => {
                const startTime = new Date(interview.startTime);
                const endTime = new Date(interview.endTime);

                return (
                    currentSlotTime >= startTime.getTime() &&
                    currentSlotTime < endTime.getTime() &&
                    startTime.getDate() === checkDate.getDate() &&
                    startTime.getMonth() === checkDate.getMonth() &&
                    startTime.getFullYear() === checkDate.getFullYear()
                );
            })
            .map((interview) => {
                const startTime = new Date(interview.startTime);
                const endTime = new Date(interview.endTime);

                const isStart = currentSlotTime === startTime.getTime();
                const isEnd = currentSlotTime === endTime.getTime() - slotDuration;

                // 使用面試唯一識別符來確定顏色
                const interviewKey = `${interview.interviewees.map(idx=>idx.id).join("-")}-${interview.startTime}`;
                const colorIndex = interviewColors.get(interviewKey) || 0;

                return {
                    ...interview,
                    isStart,
                    isEnd,
                    colorIndex,
                };
            });
    };

    const isTimeInSlot = (checkDate: Date, availabilitySlot: string) => {
        try {
            const [slotStart, slotEnd] = availabilitySlot.split("/");
            const startDate = new Date(slotStart);
            const endDate = new Date(slotEnd);

            return (
                checkDate.getTime() >= startDate.getTime() &&
                checkDate.getTime() < endDate.getTime() &&
                checkDate.toDateString() === startDate.toDateString()
            );
        } catch (e) {
            console.error("時間格式錯誤:", e);
            return false;
        }
    };

    const getAvailabilityData = (date: Date, timeSlot: string) => {
        if (viewMode === "scheduled" && scheduledInterviews.length > 0) {
            return {
                interviews: getTimeSlotInterviews(date, timeSlot),
                interviewers: [],
                interviewees: [],
                rooms: [],
            };
        }

        const [hours, minutes] = timeSlot.split(":");
        const checkDate = new Date(date);
        checkDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

        // 根據視圖模式選擇不同的人員列表
        let relevantInterviewers = interviewers;
        let relevantInterviewees = interviewees;

        if (viewMode === "unmatched" && unmatchedResults) {
            relevantInterviewers = unmatchedResults.interviewers;
            relevantInterviewees = unmatchedResults.interviewees;
        }

        // 確保 interviewer.availability 是數組
        const availableInterviewers =
            relevantInterviewers?.filter((interviewer) => {
                // 安全檢查：確保 availability 存在且是數組
                if (!interviewer.availability || !Array.isArray(interviewer.availability)) {
                    console.warn(`面試官 ${interviewer.name} 的 availability 不是有效數組`, interviewer.availability);
                    return false;
                }
                return interviewer.availability.some((slot) => isTimeInSlot(checkDate, slot));
            }) || [];

        // 確保 interviewee.availability 是數組
        const availableInterviewees =
            relevantInterviewees?.filter((interviewee) => {
                // 安全檢查：確保 availability 存在且是數組
                if (!interviewee.availability || !Array.isArray(interviewee.availability)) {
                    console.warn(`應試者 ${interviewee.name} 的 availability 不是有效數組`, interviewee.availability);
                    return false;
                }
                return interviewee.availability.some((slot) => isTimeInSlot(checkDate, slot));
            }) || [];
        // console.log(checkDate, "可用的面試官:", availableInterviewers);
        return {
            interviews: [],
            interviewers: availableInterviewers,
            interviewees: availableInterviewees,
        };
    };

    const renderTooltip = (date: Date, timeSlot: string) => {
        const targetInterview = getTimeSlotInterviews(date, timeSlot);
        
        // 在 "scheduled" 模式下且沒有面試，則不顯示 tooltip
        if (viewMode === "scheduled" && scheduledInterviews.length > 0 && targetInterview.length == 0) {
            return (
                <Tooltip>
                    <div key={`${date}-tooltip`} style={{ display: "none" }}></div>
                </Tooltip>
            );
        }
        
        return (
            <Tooltip className="availability-tooltip">
                <div className="tooltip-content">
                    {viewMode === "scheduled" && scheduledInterviews.length > 0 ? (
                        targetInterview.map((interview) => {
                            return (
                                <div
                                    key={`${interview.interviewees.map(idx=>idx.id)[0]}-${interview.startTime}-interview-details`}
                                    className="interview-details"
                                >
                                    <div
                                        key={`${interview.interviewees.map(idx=>idx.id)[0]}-${interview.startTime}-interview-slot`}
                                        className="interview-slot"
                                        style={{
                                            borderLeft: `3px solid ${getInterviewColor(interview.colorIndex)}`,
                                            margin: "8px 0",
                                            padding: "8px",
                                            color: "#000",
                                        }}
                                    >
                                        <span className="interview-time">面試編號：{interview.id}</span>
                                        <div
                                            key={`${interview.interviewees.map(idx=>idx.id)[0]}-${interview.startTime}-interview-details`}
                                            className="interview-details"
                                        >
                                            <p>
                                                <strong>面試官：</strong> 
                                                {interview.interviewers.map((inter, i) => {
                                                    const positionChar = inter?.position ? 
                                                    inter.position.charAt(0) : 'N/A';
                                                    
                                                    return (
                                                        <span key={`interviewer-${i}`}>
                                                            {inter.name} ({positionChar}) {i < interview.interviewers.length - 1 ? ", " : ""}
                                                        </span>
                                                    );
                                                })}
                                            </p>
                                        </div>
                                        <div className="interview-details">
                                            <p>
                                                <strong>應試者：</strong> 
                                                {interview.interviewees.map((ee, i) => {
                                                    const positionChar = ee?.position ? 
                                                    ee.position.charAt(0) : 'N/A';
                                                    
                                                    return (
                                                        <span key={`interviewee-${i}`}>
                                                            {ee.name} ({positionChar})
                                                            {i < interview.interviewees.length - 1 ? ", " : ""}
                                                        </span>
                                                    );
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div key={`${date}-tooltip`}>
                            <p>
                                <strong>面試官：</strong>{" "}
                                {getAvailabilityData(date, timeSlot)
                                    .interviewers.map((i) => `${i.name} (${i.position?.charAt(0) || 'N/A'})`)
                                    .join(", ") || "無"}
                            </p>
                            <p>
                                <strong>應試者：</strong>{" "}
                                {getAvailabilityData(date, timeSlot)
                                    .interviewees.map((i) => `${i.name} (${i.position?.charAt(0) || 'N/A'})`)
                                    .join(", ") || "無"}
                            </p>
                        </div>
                    )}
                </div>
            </Tooltip>
        );
    };

    useLayoutEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--calendar-grid-num", `${daysToShow}`);
    }, [daysToShow]);

    return (
        <div className="calendar-grid">
            <div className="time-column">
                {timeSlots
                    .filter((_, index) => index % 2 === 0)
                    .map((time) => (
                        <div key={`header-${time}`} className="time-header">
                            {time}
                        </div>
                    ))}
            </div>

            {getDates(startDate, daysToShow).map((date, dateIndex) => (
                <div key={`column-${dateIndex}`} className="day-column">
                    {timeSlots.map((timeSlot, timeIndex) => {
                        const availabilityData = getAvailabilityData(date, timeSlot);

                        return (
                            <OverlayTrigger
                                key={`overlay-${dateIndex}-${timeIndex}`}
                                placement="auto"
                                delay={{ show: 50, hide: 100 }}
                                overlay={renderTooltip(date, timeSlot)}
                            >
                                <div className="time-slot-wrapper" key={`slot-${dateIndex}-${timeIndex}`}>
                                    <CalendarTimeSlot
                                        availability={availabilityData}
                                        showSchedule={viewMode === "scheduled" && scheduledInterviews.length > 0}
                                    />
                                </div>
                            </OverlayTrigger>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default CalendarGrid;
