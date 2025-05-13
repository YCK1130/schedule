import React from 'react';
import type { Interviewee, Interviewer, Room } from '../../types';

interface TimeSlotProps {
  availability: {
    interviewers: Interviewer[];
    interviewees: Interviewee[];
    rooms: Room[];
  };
  time: string;
  day: number;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ availability, time, day }) => {
  const { interviewers, interviewees, rooms } = availability;
  
  // 計算可用性級別 (0-3)
  const getAvailabilityLevel = () => {
    const hasInterviewers = interviewers.length > 0;
    const hasInterviewees = interviewees.length > 0;
    const hasRooms = rooms.length > 0;
    
    if (hasInterviewers && hasInterviewees && hasRooms) return 3;
    if ((hasInterviewers && hasInterviewees) || 
        (hasInterviewers && hasRooms) || 
        (hasInterviewees && hasRooms)) return 2;
    if (hasInterviewers || hasInterviewees || hasRooms) return 1;
    return 0;
  };

  const level = getAvailabilityLevel();
  
  return (
    <div 
      className={`calendar-time-slot availability-level-${level}`}
      data-time={time}
      data-day={day}
    >
      {level > 0 && (
        <span className="availability-count">
          {interviewers.length}/{interviewees.length}/{rooms.length}
        </span>
      )}
    </div>
  );
};

export default TimeSlot;