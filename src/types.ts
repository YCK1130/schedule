export interface Interviewer {
    id: string;
    name: string;
    email: string;
    availability: string[] | string;
    origin_availability?: string[] | string;
    position?: string;
    specialization?: string;
    select_count?: number;
}

export interface Interviewee {
    id: string;
    name: string;
    email: string;
    position: string;
    availability: string[] | string;
    origin_availability?: string[] | string;
    select_count?: number;
}

export interface ScheduledInterview {
    id?: number;
    interviewers: {id: string, name: string, position?: string}[];
    interviewees: {id: string, name: string, position?: string}[];
    startTime: string;
    endTime: string;
}
