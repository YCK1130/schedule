export interface Interviewer {
    id: string;
    name: string;
    email: string;
    availability: string[] | string;
    origin_availability: string[] | string;
    input_availability: string[] | string;
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
    origin_availability: string[] | string;
    input_availability: string[] | string;
    select_count?: number;
}

export interface ScheduledInterview {
    id?: number;
    interviewers: {id: string, name: string, position?: string}[];
    interviewees: {id: string, name: string, position?: string}[];
    startTime: string;
    endTime: string;
}
export interface UnmatchedResult {
    interviewers: Interviewer[];
    interviewees: Interviewee[];
    reasons: string[];
}

export interface GroupRestriction {
    minCount: number; // 新增：最小值，用於範圍限制
    maxCount: number; // 新增：最大值，用於範圍限制
    groupName: string;
    targetPosition: string; // 目標職位
}
// 定義視圖模式類型
export type ViewMode = "scheduled" | "unmatched";
export type GroupType = "interviewers" | "interviewees";