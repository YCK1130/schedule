import React from "react";
import { getInterviewColor } from "../../utils/calendar";
interface TimeSlotProps {
    availability: {
        interview?: {
            startTime: string;
            endTime: string;
            colorIndex: number;
            isStart: boolean;
            isEnd: boolean;
        }[];
        interviewersNum: number;
        intervieweesNum: number;
    };
    showSchedule?: boolean;
}

const AvailableTimeSlot: React.FC<TimeSlotProps> = ({ availability }) => {
    const { interviewersNum, intervieweesNum } = availability;
    return (
        <div className={`calendar-time-slot`}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4px",
                    justifyContent: "start",
                    width: "100%",
                }}
            >
                {interviewersNum > 0 && <div style={{ color: "#4E6688" }}>面試官: {interviewersNum}</div>}
                {intervieweesNum > 0 && <div style={{ color: "#DDA853" }}>應試者: {intervieweesNum}</div>}
            </div>
        </div>
    );
};

const ScheduleTimeSlot: React.FC<TimeSlotProps> = ({ availability }) => {
    const { interview } = availability;
    if (!interview || interview.length === 0) {
        return null;
    }
    const key = `ScheduleTimeSlot-${interview[0].startTime}`;
    return (
        <div key={`${key}-calendar-time-slot`} className={`calendar-time-slot ${interview[0].isStart ? "pt-2" : interview[0].isEnd ? "pb-2" : ""}`}>
            {interview.map((interviewItem) => {
                let sty = null;
                if (interviewItem.isStart) {
                    sty = { borderRadius: "2px 2px 0 0" };
                } else if (interviewItem.isEnd) {
                    sty = { borderRadius: "0 0 2px 2px" };
                }
                sty = {...sty, backgroundColor: `${getInterviewColor(interviewItem.colorIndex)}`};
                return (
                    <div
                        key={`${key}-interview-block-${interviewItem.colorIndex}`}
                        className={`interview-block mx-2`}
                        style={sty as React.CSSProperties}
                    >
                    </div>
                );
            })}
        </div>
    );
};

const TimeSlot: React.FC<TimeSlotProps> = ({ availability, showSchedule = false }) => {
    return <>{!showSchedule ? <AvailableTimeSlot availability={availability} /> : <ScheduleTimeSlot availability={availability} />}</>;
};

export default TimeSlot;
