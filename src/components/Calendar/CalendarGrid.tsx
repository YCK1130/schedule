import React, { useLayoutEffect, useMemo } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import type { Interviewee, Interviewer, Room } from '../../types';
import CalendarTimeSlot from './CalendarTimeSlot';

interface CalendarGridProps {
  interviewers?: Interviewer[];
  interviewees?: Interviewee[];
  rooms?: Room[];
  startDate: Date;
  daysToShow: number;
  earliestTime?: number;
  latestTime?: number;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  interviewers,
  interviewees,
  rooms,
  startDate,
  daysToShow,
  earliestTime = 9,
  latestTime = 17
}) => {
  const timeSlots: string[] = useMemo(() => {
    const slots: string[] = [];
    for (let hour = earliestTime; hour <= latestTime; hour++) {
      slots.push(`${String(hour).padStart(2, '0')}:00`);
      slots.push(`${String(hour).padStart(2, '0')}:30`);
    }
    return slots;
  }, [earliestTime, latestTime]);

  const isTimeInSlot = (checkDate: Date, availabilitySlot: string) => {
    try {
      const [slotStart, slotEnd] = availabilitySlot.split('/');
      const startDate = new Date(slotStart);
      const endDate = new Date(slotEnd);

      // 1. 確保是同一天
      if (checkDate.toDateString() !== startDate.toDateString()) {
        return false;
      }

      // 2. 檢查時間是否在範圍內
      return checkDate.getTime() >= startDate.getTime() && 
             checkDate.getTime() < endDate.getTime();
    } catch (e) {
      console.error('時間格式錯誤:', e);
      return false;
    }
  };

  const getAvailabilityData = (date: Date, timeSlot: string) => {
    const [hours, minutes] = timeSlot.split(':');
    const checkDate = new Date(date);
    checkDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

    
    const availableInterviewers = interviewers?.filter(interviewer =>
      Array.isArray(interviewer?.availability.split(',')) &&
      interviewer.availability.split(',').some(slot => isTimeInSlot(checkDate, slot))
    ) || [];

    const availableInterviewees = interviewees?.filter(interviewee =>
      Array.isArray(interviewee?.availability.split(',')) &&
      interviewee.availability.split(',').some(slot => isTimeInSlot(checkDate, slot))
    ) || [];

    const availableRooms = rooms?.filter(room =>
      Array.isArray(room?.availability.split(',')) &&
      room.availability.split(',').some(slot => isTimeInSlot(checkDate, slot))
    ) || [];
    console.log('interviewers', interviewers);
    console.log('interviewees', interviewees); 
    console.log('rooms', rooms);
    return {
      interviewers: availableInterviewers,
      interviewees: availableInterviewees,
      rooms: availableRooms
    };
  };

  const renderTooltip = (date: Date, timeSlot: string) => (
    <Tooltip id={`tooltip-${date.toISOString()}-${timeSlot}`} className="availability-tooltip">
      <div>
        <p><strong>面試官：</strong> {getAvailabilityData(date, timeSlot).interviewers.map(i => i.name).join(', ') || '無'}</p>
        <p><strong>應試者：</strong> {getAvailabilityData(date, timeSlot).interviewees.map(i => i.name).join(', ') || '無'}</p>
        <p><strong>會議室：</strong> {getAvailabilityData(date, timeSlot).rooms.map(r => r.name).join(', ') || '無'}</p>
      </div>
    </Tooltip>
  );

  const getDates = () => {
    const dates = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < daysToShow; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      // 只納入週一至週五的日期
      dates.push(date);
      if (date.getDay() !== 0 && date.getDay() !== 6) {
      }
    }
    
    return dates;
  };
  useLayoutEffect(() => {
    // set --calendar-grid-num to the number of days to show
    const root = document.documentElement;
    root.style.setProperty('--calendar-grid-num', `${daysToShow}`);
  }, [daysToShow]);

  return (
    <div className="calendar-grid">
      <div className="time-column">
        {timeSlots.filter((_, index) => index % 2 === 0).map((time) => (
          <div key={`header-${time}`} className="time-header">
            {time}
          </div>
        ))}
      </div>
      {getDates().map((date) => (
        <div key={date.toISOString()} className="day-column">
          {timeSlots.map((timeSlot: string, index: number) => (
            <OverlayTrigger
              key={`${date.toISOString()}-${timeSlot}`}
              placement="auto"
              delay={{ show: 50, hide: 0 }}
              overlay={renderTooltip(date, timeSlot)}
              rootClose
              trigger={['hover', 'focus']}
            >
              <div className={`time-slot-wrapper ${index % 2 === 1 ? 'half-hour' : ''}`}>
                <CalendarTimeSlot
                  availability={getAvailabilityData(date, timeSlot)}
                  time={timeSlot}
                  day={date.getDate()}
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