export interface Interviewer {
    id: string;
    name: string;
    email: string;
    availability: string[] | string; // 改為陣列形式，每個元素是一個時段 "2025-05-10T09:00/2025-05-10T10:00"
    specialization?: string;
}

export interface Interviewee {
    id: string;
    name: string;
    email: string;
    positionApplied: string; // 保留欄位，但在算法中不使用
    availability: string[] | string; // 改為陣列形式，每個元素是一個時段 "2025-05-10T09:00/2025-05-10T10:00"
}

export interface ScheduledInterview {
    interviewerIds: string[];
    interviewerNames: string[];
    intervieweeIds: string[];
    intervieweeNames: string[];
    startTime: string;
    endTime: string;
}
