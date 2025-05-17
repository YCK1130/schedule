import React from "react";
import { useScheduling } from "../../contexts/SchedulingContext";
import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";
import CalendarLegend from "./CalendarLegend";
interface AvailabilityCalendarProps {}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = () => {
    const { scheduledInterviews } = useScheduling();

    return (
        <div className="calendar-container">
            <div className="calendar-header-section">
                <h5 className="m-0">{scheduledInterviews.length > 0 ? "面試時間表" : "可用時段總覽"}</h5>
            </div>
            <div className="calendar-main">
                <div className="calendar-view">
                    <div className="calendar-scroll-container">
                        <CalendarHeader />
                        <CalendarGrid scheduledInterviews={scheduledInterviews} />
                    </div>
                </div>
            </div>
            <div className="calendar-footer">
                <CalendarLegend isScheduleView={scheduledInterviews.length > 0} />
            </div>
        </div>
    );
};

export default AvailabilityCalendar;
