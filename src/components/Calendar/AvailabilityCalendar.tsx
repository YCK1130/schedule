import React, { lazy, Suspense } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDataSave } from "../../contexts/DataContext";

// 使用懶加載載入日曆元件
const CalendarHeader = lazy(() => import("./CalendarHeader"));
const CalendarGrid = lazy(() => import("./CalendarGrid"));
const CalendarLegend = lazy(() => import("./CalendarLegend"));

// 加載中元件
const LoadingComponent = () => (
  <div className="loading-container" style={{ gridColumn: '1 / -1', height: '200px' }}>
    <div className="spinner"></div>
    <h3 className="loading-text">日曆載入中...</h3>
  </div>
);

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
                    <div className={`calendar-scroll-container ${loading ? "no-scroll" : ""}`}>
                        <Suspense fallback={<LoadingComponent />}>
                            <CalendarHeader />
                            <CalendarGrid />
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className="calendar-footer">
                <Suspense fallback={<div className="p-2">載入中...</div>}>
                    <CalendarLegend isScheduleView={viewMode === "scheduled" && scheduledInterviews.length > 0} />
                </Suspense>
            </div>
        </div>
    );
};

export default AvailabilityCalendar;
