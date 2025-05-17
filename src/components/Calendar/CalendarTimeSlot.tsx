import React from 'react';
import type { Interviewee, Interviewer } from '../../types';

interface TimeSlotProps {
  availability: {
    interviews: {
      interviewerIds: string[];
      interviewerNames: string[];
      intervieweeIds: string[];
      intervieweeNames: string[];
      startTime: string;
      endTime: string;
      colorIndex: number;
      isStart: boolean;
      isEnd: boolean;
    }[];
    interviewers: Interviewer[];
    interviewees: Interviewee[];
  };
  showSchedule?: boolean;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ 
  availability, 
  showSchedule = false
}) => {
  const { interviews, interviewers, interviewees } = availability;
  
  const getAvailabilityLevel = () => {
    if (showSchedule) {
      return interviews.length > 0 ? 3 : 0;
    }
    
    const hasInterviewers = interviewers.length >= 2;  // 需要至少2位面試官
    const hasInterviewees = interviewees.length >= 1;  // 需要至少1位面試者
    
    if (hasInterviewers && hasInterviewees) return 3;
    else if (hasInterviewers) return 2;
    else if (hasInterviewees) return 1;
    return 0;
  };

  const getColor = () => {
    const level = getAvailabilityLevel();
    return level === 3 ? 'high' : level === 2 ? 'medium' : level === 1 ? 'low' : '';
  };

  const renderContent = () => {
    if (!showSchedule || interviews.length === 0) {
      return (
        <>
          {interviewers.length > 0 && <div>面試官: {interviewers.length}</div>}
          {interviewees.length > 0 && <div>面試者: {interviewees.length}</div>}
        </>
      );
    }

    return interviews.map((interview, index) => {
      const key = `${interview.intervieweeIds[0]}-${interview.startTime}-${index}`;
      if (!interview.isStart) return null;

      return (
        <div key={key} className={`interview-block color-${interview.colorIndex}`}>
          <div className="interview-content">
            <strong>面試者:</strong> {interview.intervieweeNames.join(', ')}
            <br />
            <strong>面試官:</strong> {interview.interviewerNames.join(', ')}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={`calendar-time-slot ${getColor()}`}>
      {renderContent()}
    </div>
  );
};

export default TimeSlot;