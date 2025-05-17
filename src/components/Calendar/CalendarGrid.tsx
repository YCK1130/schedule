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
        // rooms,
        displayInfo: { startDate, daysToShow, earliestTime, latestTime },
    } = useScheduling();

    const timeSlots: string[] = useMemo(() => {
        const slots: string[] = [];
        for (let hour = earliestTime; hour <= latestTime; hour++) {
            slots.push(`${String(hour).padStart(2, "0")}:00`);
            slots.push(`${String(hour).padStart(2, "0")}:30`);
        }
        return slots;
    }, [earliestTime, latestTime]);

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
            .map((interview, index) => {
                const startTime = new Date(interview.startTime);
                const endTime = new Date(interview.endTime);

                const isStart = currentSlotTime === startTime.getTime();
                const isEnd = currentSlotTime === endTime.getTime() - slotDuration;

                return {
                    ...interview,
                    isStart,
                    isEnd,
                    colorIndex: index,
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
        if (scheduledInterviews.length > 0) {
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

        const availableInterviewers =
            interviewers?.filter((interviewer) => interviewer.availability.split(",").some((slot) => isTimeInSlot(checkDate, slot))) || [];

        const availableInterviewees =
            interviewees?.filter((interviewee) => interviewee.availability.split(",").some((slot) => isTimeInSlot(checkDate, slot))) || [];

        // const availableRooms = rooms?.filter((room) => room.availability.split(",").some((slot) => isTimeInSlot(checkDate, slot))) || [];

        return {
            interviews: [],
            interviewers: availableInterviewers,
            interviewees: availableInterviewees,
            // rooms: availableRooms,
        };
    };

    const renderTooltip = (date: Date, timeSlot: string) => (
        <Tooltip className="availability-tooltip">
            <div className="tooltip-content">
                {scheduledInterviews.length > 0 ? (
                    getTimeSlotInterviews(date, timeSlot).map((interview, _) => (
                        <div
                            key={`${interview.intervieweeIds[0]}-${interview.startTime}`}
                            className="interview-slot"
                            style={{
                                borderLeft: `3px solid ${getInterviewColor(interview.colorIndex)}`,
                                marginBottom: "8px",
                                padding: "8px",
                                backgroundColor: "#f8fafc",
                            }}
                        >
                            <div className="interview-time">
                                {new Date(interview.startTime).toLocaleTimeString("zh-TW", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                                {" - "}
                                {new Date(interview.endTime).toLocaleTimeString("zh-TW", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </div>
                            <div className="interview-details">
                                <p>
                                    <strong>面試者：</strong> {interview.intervieweeNames.join(", ")}
                                </p>
                                <p>
                                    <strong>面試官：</strong> {interview.interviewerNames.join(", ")}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <>
                        <p>
                            <strong>面試官：</strong>{" "}
                            {getAvailabilityData(date, timeSlot)
                                .interviewers.map((i) => i.name)
                                .join(", ") || "無"}
                        </p>
                        <p>
                            <strong>應試者：</strong>{" "}
                            {getAvailabilityData(date, timeSlot)
                                .interviewees.map((i) => i.name)
                                .join(", ") || "無"}
                        </p>
                    </>
                )}
            </div>
        </Tooltip>
    );

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
            {getDates(startDate, daysToShow).map((date) => (
                <div key={date.toISOString()} className="day-column">
                    {timeSlots.map((timeSlot: string, index: number) => (
                        <OverlayTrigger
                            key={`${date.toISOString()}-${timeSlot}`}
                            placement="auto"
                            delay={{ show: 50, hide: 0 }}
                            overlay={renderTooltip(date, timeSlot)}
                            trigger={["hover", "click"]}
                            rootClose
                        >
                            <div className={`time-slot-wrapper ${index % 2 === 1 ? "half-hour" : ""}`}>
                                <CalendarTimeSlot
                                    availability={getAvailabilityData(date, timeSlot)}
                                    showSchedule={scheduledInterviews.length > 0}
                                />
                            </div>
                        </OverlayTrigger>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CalendarGrid;
