export interface Interviewer {
    id: string;
    name: string;
    email: string;
    availability: string[] | string; // 改為陣列形式，每個元素是一個時段 "2025-05-10T09:00/2025-05-10T10:00"
    position?: string; // 保留欄位，但在算法中不使用
    specialization?: string;
    select_count?: number; // 可選，表示面試官可以面試的次數
}

export interface Interviewee {
    id: string;
    name: string;
    email: string;
    position: string; // 保留欄位，但在算法中不使用
    availability: string[] | string; // 改為陣列形式，每個元素是一個時段 "2025-05-10T09:00/2025-05-10T10:00"
    select_count?: number; // 可選，表示面試官可以面試的次數
}

export interface ScheduledInterview {
    interviewerIds: string[];
    interviewerNames: string[];
    intervieweeIds: string[];
    intervieweeNames: string[];
    startTime: string;
    endTime: string;
}
