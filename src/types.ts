export interface Interviewer {
    id: string;
    name: string;
    email: string;
    availability: string; // ISO date strings in format "2025-05-10T09:00/2025-05-10T10:00"
    specialization?: string;
}

export interface Interviewee {
  id: string;
  name: string;
  email: string;
  positionApplied: string;
  availability: string; // ISO date strings in format "2025-05-10T09:00/2025-05-10T10:00"
}

export interface ScheduledInterview {
  interviewerIds: string[];
  interviewerNames: string[];
  intervieweeIds: string[];
  intervieweeNames: string[];
  startTime: string;
  endTime: string;
  position?: string;
}