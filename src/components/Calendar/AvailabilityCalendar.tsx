import React, { useMemo } from 'react';
import type { Interviewee, Interviewer, Room } from '../../types';
import CalendarGrid from './CalendarGrid';
import CalendarHeader from './CalendarHeader';
import CalendarLegend from './CalendarLegend';

interface AvailabilityCalendarProps {
  interviewers: Interviewer[];
  interviewees: Interviewee[];
  rooms: Room[];
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
  interviewers,
  interviewees,
  rooms
}) => {
  const { startDate, daysToShow, earliestTime, latestTime } = useMemo(() => {
    const allAvailabilities = [
      ...interviewers.flatMap(i => i.availability || []),
      ...interviewees.flatMap(i => i.availability || []),
      ...rooms.flatMap(r => r.availability || []),
    ].flatMap(slot => slot.split(',')); 
      
    if (allAvailabilities.length === 0) {
      const today = new Date();
      const monday = new Date(today);
      monday.setDate(today.getDate() - today.getDay() + 1);
      return { startDate: monday, daysToShow: 7 };
    }
    const dates = allAvailabilities.flatMap(slot => {
      const [start] = slot.split('/');
      return new Date(start);
    }).filter(date => !isNaN(date.getTime()));

    if (dates.length === 0) {
      const today = new Date();
      const monday = new Date(today);
      monday.setDate(today.getDate() - today.getDay() + 1);
      return { startDate: monday, daysToShow: 7 };
    }
    const minDate = new Date(Math.min(...dates.map(d => d.getTime())));
    const maxDate = new Date(Math.max(...dates.map(d => d.getTime())));

    const totalDays = Math.max(
      Math.ceil((maxDate.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24)) + 1,
      7
    );

    // find the earliest time and the latest time slot in a day
    const earliestTime = allAvailabilities.reduce((earliest, slot) => {
      const [start, end] = slot.split('/');
      const startTime = new Date(start);
      const endTime = new Date(end);

      const prev = earliest.getHours();
      // console.log('earliest', earliest, startTime, endTime, start, end);
      if (startTime.getHours() < endTime.getHours()){
        return startTime.getHours() < prev ? startTime : earliest;
      }else{
        return endTime.getHours() < prev ? endTime : earliest;
      }
    }, new Date('9999-12-31T23:59:59'));

    const latestTime = allAvailabilities.reduce((latest, slot) => {
      const [start, end] = slot.split('/');
      const startTime = new Date(start);
      const endTime = new Date(end);

      const prev = latest.getHours();
      if (startTime.getHours() > endTime.getHours()){
        return startTime.getHours() > prev ? startTime : latest;
      }else{
        return endTime.getHours() > prev ? endTime : latest;
      }
    }, new Date('0000-01-01T00:00:00'));

    // console.log('allAvailabilities', allAvailabilities);
    // console.log('earliestTime', earliestTime);
    // console.log('latestTime', latestTime);
    return {
      startDate: minDate,
      daysToShow: totalDays,
      earliestTime: earliestTime?.getHours(),
      latestTime: latestTime?.getHours()
    };
  }, [interviewers, interviewees, rooms]);

  return (
    <div className="calendar-container">
      <div className="calendar-header-section">
        <h5 className="m-0">可用時段總覽</h5>
      </div>
      <div className="calendar-main">
        <div className="calendar-view">
          <div className="calendar-scroll-container">
          <CalendarHeader startDate={startDate} daysToShow={daysToShow} />
            <CalendarGrid
              interviewers={interviewers}
              interviewees={interviewees}
              rooms={rooms}
              startDate={startDate}
              daysToShow={daysToShow}
              earliestTime={earliestTime}
              latestTime={latestTime}
            />
          </div>
        </div>
      </div>
      <div className="calendar-footer">
        <CalendarLegend />
      </div>
    </div>
  );
};

export default AvailabilityCalendar;