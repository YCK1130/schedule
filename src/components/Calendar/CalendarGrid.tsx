import React, { useLayoutEffect, useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDataSave } from "../../contexts/DataContext";
import type { ScheduledInterview } from "../../types";
import {
    generateInterviewColorMap,
    generateTimeSlots,
    getDates,
    getTimeSlotInterviews,
    getTimeSlotInterviewsWithPreprocess
} from "../../utils/calendar";
import CalendarTimeSlot from "./CalendarTimeSlot";

const CalendarGrid: React.FC = () => {
    const {
        unmatchedResults,
        viewMode,
        displayInfo: { startDate, daysToShow, earliestTime, latestTime },
        getSlotData,
        scheduledInterviews,
        loading,
    } = useDataSave();

    // 為每個面試分配一個唯一的顏色索引
    const interviewColors = useMemo(() => generateInterviewColorMap(scheduledInterviews), [scheduledInterviews]);

    // 時間槽
    const timeSlots = useMemo(() => generateTimeSlots(earliestTime, latestTime), [earliestTime, latestTime]);

    const getAvailabilityData = (date: Date, timeSlot: string) => {
        // 從時間槽字符串解析小時和分鐘
        const [hours, minutes] = timeSlot.split(":");
        const hour = parseInt(hours, 10);
        const minute = parseInt(minutes, 10);

        // 使用預處理資料
        const slotData = getSlotData(date, hour, minute);

        if (!slotData) {
            return {
                interviewersNum: 0,
                intervieweesNum: 0,
                interviewersNames: "",
                intervieweesNames: "",
            };
        }

        // 從預處理資料中取出相關資訊
        const { availableInterviewers, availableInterviewees, scheduledInterviews: scheduled } = slotData;

        // 根據視圖模式過濾資料
        let relevantInterviewers = availableInterviewers;
        let relevantInterviewees = availableInterviewees;

        if (viewMode === "unmatched" && unmatchedResults) {
            // 如果是「未排程」視圖，只顯示未匹配的面試官和面試者
            const unmatchedInterviewerIds = new Set(unmatchedResults.interviewers.map((i) => i.id));
            const unmatchedIntervieweeIds = new Set(unmatchedResults.interviewees.map((i) => i.id));
            relevantInterviewers = availableInterviewers.filter((i) => unmatchedInterviewerIds.has(i.id));
            relevantInterviewees = availableInterviewees.filter((i) => unmatchedIntervieweeIds.has(i.id));
            // console.debug("unmatched",relevantInterviewees)
        }

        // 如果是已排程視圖並且有面試安排
        if (viewMode === "scheduled" && scheduled && scheduled.length > 0) {
            const interview = getTimeSlotInterviews(date, timeSlot, scheduled, interviewColors);
            return {
                interview,
                interviewersNum: 0,
                intervieweesNum: 0,
                interviewersNames: "",
                intervieweesNames: "",
            };
        }

        return {
            interviewersNum: relevantInterviewers.length,
            intervieweesNum: relevantInterviewees.length,
            interviewersNames: relevantInterviewers.map((i) => `${i.name} (${i.position?.charAt(0) || "N/A"})`).join(", "),
            intervieweesNames: relevantInterviewees.map((i) => `${i.name} (${i.position?.charAt(0) || "N/A"})`).join(", "),
        };
    };

    const renderTooltip = (date: Date, timeSlot: string) => {
        // 從時間槽字符串解析小時和分鐘
        const [hours, minutes] = timeSlot.split(":");
        const hour = parseInt(hours, 10);
        const minute = parseInt(minutes, 10);
        const slotData = getSlotData(date, hour, minute);

        let { scheduledInterviews: targets } = slotData ? slotData : { scheduledInterviews: [] as ScheduledInterview[] };
        if (!targets) targets = [];
        const targetInterview = getTimeSlotInterviewsWithPreprocess(date, timeSlot, targets, interviewColors);

        // 在 "scheduled" 模式下且沒有面試，則不顯示 tooltip
        if (viewMode === "scheduled" && targets.length >= 0 && targetInterview.length === 0) {
            return (
                <Tooltip>
                    <div key={`${date}-tooltip`} style={{ display: "none" }}></div>
                </Tooltip>
            );
        }
        return (
            <Tooltip className="availability-tooltip">
                <div className="tooltip-content">
                    {viewMode === "scheduled" && targets.length > 0 ? (
                        targetInterview.map((interview) => {
                            return (
                                <div key={`${interview.interviewees[0].id}-${interview.startTime}-interview-details`} className="interview-details">
                                    <div
                                        key={`${interview.interviewees[0].id}-${interview.startTime}-interview-slot`}
                                        className="interview-slot"
                                        style={{
                                            borderLeft: `3px solid ${interview.color}`,
                                            margin: "8px 0",
                                            padding: "8px",
                                            color: "#000",
                                        }}
                                    >
                                        <span className="interview-time">面試編號：{interview.id}</span>
                                        <div
                                            key={`${interview.interviewees.map((idx) => idx.id)[0]}-${interview.startTime}-interview-details`}
                                            className="interview-details"
                                        >
                                            <p>
                                                <strong>面試官：</strong>
                                                {interview.interviewers.map((i) => `${i.name} (${i.position?.charAt(0) || "N/A"})`).join(", ")}
                                            </p>
                                        </div>
                                        <div className="interview-details">
                                            <p>
                                                <strong>應試者：</strong>
                                                {interview.interviewees.map((i) => `${i.name} (${i.position?.charAt(0) || "N/A"})`).join(", ")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div key={`${date}-tooltip`}>
                            <p>
                                <strong>面試官：</strong> {getAvailabilityData(date, timeSlot).interviewersNames || "無"}
                            </p>
                            <p>
                                <strong>應試者：</strong> {getAvailabilityData(date, timeSlot).intervieweesNames || "無"}
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
            {loading ? (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <h3 className="loading-text">資料預處理中...</h3>
                </div>
            ) : (
                getDates(startDate, daysToShow).map((date, dateIndex) => (
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
                ))
            )}
        </div>
    );
};

export default CalendarGrid;
