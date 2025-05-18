import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import type { ScheduledInterview } from '../types';

interface CalendarViewProps {
  scheduledInterviews: ScheduledInterview[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ scheduledInterviews }) => {
  const [scrollPosition, setScrollPosition] = useState(9); // 預設從早上9點開始

  // 生成時間軸 (7:00-19:00)
  const timeSlots = Array.from({ length: 13 }, (_, i) => `${i + 7}:00`);

  // 為每個面試官生成唯一顏色
  const getInterviewerColor = (interviewerId: string) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
      '#FFEEAD', '#D4A5A5', '#9B6B6B', '#77A1D3'
    ];
    const index = parseInt(interviewerId, 36) % colors.length;
    return colors[index];
  };

  const handleScroll = (e: React.WheelEvent) => {
    const newPosition = scrollPosition + (e.deltaY > 0 ? 0.5 : -0.5);
    if (newPosition >= 7 && newPosition <= 17) {
      setScrollPosition(newPosition);
    }
  };

  // 生成面試時段的工具提示內容
  const renderTooltip = (interview: ScheduledInterview) => (
    <Tooltip>
      <div className="interview-tooltip">
        <p><strong>面試者：</strong> {interview.intervieweeNames.join(", ")}</p>
        <p><strong>面試官：</strong> {interview.interviewerNames.join(", ")}</p>
        <p><strong>時間：</strong> {new Date(interview.startTime).toLocaleTimeString()}</p>
      </div>
    </Tooltip>
  );

  return (
    <div className="calendar-container">
      <div className="calendar-view" onWheel={handleScroll}>
        <div className="calendar-header">
          <div className="time-header">時間</div>
          {['週一', '週二', '週三', '週四', '週五'].map(day => (
            <div key={day} className="calendar-day">{day}</div>
          ))}
        </div>
        <div className="calendar-body">
          <div className="time-slots">
            {timeSlots.map(time => (
              <div key={time} className="time-slot">{time}</div>
            ))}
          </div>
          <div className="events-grid">
            {scheduledInterviews.map(interview => (
              <OverlayTrigger
                key={`${interview.intervieweeIds.join(",")}-${interview.startTime}`}
                placement="auto"
                overlay={renderTooltip(interview)}
              >
                <div
                  className="interview-event"
                  style={{
                    gridColumn: `${new Date(interview.startTime).getDay()}`,
                    gridRow: `${new Date(interview.startTime).getHours() - 6}`,
                    backgroundColor: getInterviewerColor(interview.interviewerIds[0]),
                  }}
                >
                  {interview.intervieweeNames.join(", ")}
                </div>
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;