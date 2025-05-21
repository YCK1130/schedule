import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDataSave } from "../../contexts/DataContext";
import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";
import CalendarLegend from "./CalendarLegend";

const AvailabilityCalendar: React.FC = () => {
    const { scheduledInterviews, unmatchedResults, viewMode, loading, setViewMode } = useDataSave();

    return (
        <div className="calendar-container">
            <div className="calendar-header-section d-flex justify-content-between align-items-center">
                <h5 className="m-0">{scheduledInterviews.length > 0 ? "面試時間表" : "可用時段總覽"}</h5>

                {/* 添加視圖切換按鈕 */}
                {scheduledInterviews.length > 0 && unmatchedResults && unmatchedResults.interviewees.length > 0 && (
                    <ButtonGroup size="sm">
                        <Button variant={viewMode === "scheduled" ? "primary" : "outline-primary"} onClick={() => setViewMode("scheduled")}>
                            已排程
                        </Button>
                        <Button variant={viewMode === "unmatched" ? "primary" : "outline-primary"} onClick={() => setViewMode("unmatched")}>
                            未排程 ({unmatchedResults.interviewees.length})
                        </Button>
                    </ButtonGroup>
                )}
            </div>
            <div className="calendar-main">
                <div className="calendar-view">
                    <div className={`calendar-scroll-container  ${loading ? "no-scroll" : ""}`}>
                        <CalendarHeader />
                        <CalendarGrid />
                    </div>
                </div>
            </div>
            <div className="calendar-footer">
                <CalendarLegend isScheduleView={viewMode === "scheduled" && scheduledInterviews.length > 0} />
            </div>
        </div>
    );
};

export default AvailabilityCalendar;
