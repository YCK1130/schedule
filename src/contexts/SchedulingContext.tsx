import React, { createContext, useContext, useMemo, useState } from 'react';
import type { Interviewee, Interviewer, ScheduledInterview } from '../types';
import { scheduleInterviews } from '../utils/schedulerUtils';

export type ComparisonOperator = '>' | '<' | '=' | '>=' | '<=';

export interface GroupRestriction {
  operator: ComparisonOperator;
  count: number;
  groupName: string;
}

interface UnmatchedResult {
  interviewers: Interviewer[];
  interviewees: Interviewee[];
  reasons: string[];
}

interface SchedulingContextType {
  interviewers: Interviewer[];
  interviewees: Interviewee[];
  scheduledInterviews: ScheduledInterview[];
  unmatchedResults: UnmatchedResult | null;
  dataLoaded: {
    interviewers: boolean;
    interviewees: boolean;
  };
  displayInfo: {
    startDate: Date;
    daysToShow: number;
    earliestTime: number;
    latestTime: number;
  };
  groupRestrictions: {
    [key: string]: GroupRestriction;
  };
  updateGroupRestriction: (groupId: string, restriction: Omit<GroupRestriction, 'groupName'>) => void;
  setInterviewers: (data: Interviewer[]) => void;
  setInterviewees: (data: Interviewee[]) => void;
  generateSchedule: () => void;
}

const SchedulingContext = createContext<SchedulingContextType | null>(null);

export const useScheduling = () => {
  const context = useContext(SchedulingContext);
  if (!context) {
    throw new Error('useScheduling must be used within a SchedulingProvider');
  }
  return context;
};

export const SchedulingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [interviewers, setInterviewers] = useState<Interviewer[]>([]);
  const [interviewees, setInterviewees] = useState<Interviewee[]>([]);
  const [scheduledInterviews, setScheduledInterviews] = useState<ScheduledInterview[]>([]);
  const [unmatchedResults, setUnmatchedResults] = useState<UnmatchedResult | null>(null);
  const [groupRestrictions, setGroupRestrictions] = useState<{
    [key: string]: GroupRestriction;
  }>({
    interviewers: {
      operator: '=',
      count: 2,
      groupName: 'Interviewers'
    },
    interviewees: {
      operator: '=',
      count: 1,
      groupName: 'Interviewees'
    }
  });

  const dataLoaded = {
    interviewers: interviewers.length > 0,
    interviewees: interviewees.length > 0,
  };

  const generateSchedule = () => {
    console.log('開始配對程序', {
      interviewers: interviewers.length,
      interviewees: interviewees.length,
      groupRestrictions
    });
    
    const result = scheduleInterviews(interviewers, interviewees, groupRestrictions);
    console.log('配對結果：', result);
    
    setScheduledInterviews(result.interviews);
    setUnmatchedResults(result.unmatched);
  };

  const { startDate, daysToShow, earliestTime, latestTime } = useMemo(() => {
      const allAvailabilities = [
        ...interviewers.flatMap(i => i.availability.split(',') || []),
        ...interviewees.flatMap(i => i.availability.split(',') || []),
      ].filter(Boolean);
      
      if (allAvailabilities.length === 0) {
        const today = new Date();
        const monday = new Date(today);
        monday.setDate(today.getDate() - today.getDay() + 1);
        return { startDate: monday, daysToShow: 7, earliestTime: 9, latestTime: 17 };
      }
  
      const dates = allAvailabilities.flatMap(slot => {
        const [start] = slot.split('/');
        return new Date(start);
      }).filter(date => !isNaN(date.getTime()));
  
      const minDate = new Date(Math.min(...dates.map(d => d.getTime())));
      const maxDate = new Date(Math.max(...dates.map(d => d.getTime())));
      
      const totalDays = Math.ceil((maxDate.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  
      const earliestTime = allAvailabilities.reduce((earliest, slot) => {
        const [start] = slot.split('/');
        const startTime = new Date(start);
        return startTime.getHours() < earliest ? startTime.getHours() : earliest;
      }, 23);
  
      const latestTime = allAvailabilities.reduce((latest, slot) => {
        const [, end] = slot.split('/');
        const endTime = new Date(end);
        return endTime.getHours() > latest ? endTime.getHours() : latest;
      }, 0);
  
      return {
        startDate: minDate,
        daysToShow: totalDays,
        earliestTime,
        latestTime: latestTime + 1
      };
    }, [interviewers, interviewees]);
    
  return (
    <SchedulingContext.Provider
      value={{
        interviewers,
        interviewees,
        scheduledInterviews,
        unmatchedResults,
        dataLoaded,
        displayInfo: {
          startDate,
          daysToShow,
          earliestTime,
          latestTime
        },
        groupRestrictions,
        setInterviewers: (data) => {
          console.log('設置面試官資料：', data);
          setInterviewers(data);
        },
        setInterviewees: (data) => {
          console.log('設置面試者資料：', data);
          setInterviewees(data);
        },
        updateGroupRestriction: (groupId, restriction) => {
          console.log(`更新 ${groupId} 群組限制：`, restriction);
          setGroupRestrictions(prev => ({
            ...prev,
            [groupId]: {
              ...prev[groupId],
              ...restriction
            }
          }));
        },
        generateSchedule,
      }}
    >
      {children}
    </SchedulingContext.Provider>
  );
};