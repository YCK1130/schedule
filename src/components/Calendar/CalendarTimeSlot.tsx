import React from "react";

interface TimeSlotProps {
    availability: {
        interview?: {
            startTime: string;
            endTime: string;
            colorIndex: number;
            isStart: boolean;
            isEnd: boolean;
        };
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
    if (!interview) {
        return null;
    }
    const key = `ScheduleTimeSlot-${interview.startTime}`;
    let sty = null;
    if (interview.isStart) {
        sty = { borderRadius: "2px 2px 0 0" };
    } else if (interview.isEnd) {
        sty = { borderRadius: "0 0 2px 2px" };
    }
    return (
        <div key={`${key}-calendar-time-slot`} className={`calendar-time-slot ${interview.isStart ? "pt-2" : interview.isEnd ? "pb-2" : ""}`}>
            <div
                key={`${key}-interview-block`}
                className={`interview-block color-${interview.colorIndex} mx-2 `}
                style={sty as React.CSSProperties}
            />
        </div>
    );
    
};

const TimeSlot: React.FC<TimeSlotProps> = ({ availability, showSchedule = false }) => {
    const { interview } = availability;

    return (
        <>
            {!showSchedule || !interview ? (
                <AvailableTimeSlot availability={availability} />
            ) : (
                <ScheduleTimeSlot availability={availability} />
            )}
        </>
    );
};

export default TimeSlot;
