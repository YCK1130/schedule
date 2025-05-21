import type { ScheduledInterview } from "../types";

/**
 * 生成指定起始日期開始的連續日期
 */
export const getDates = (startDate: Date, num: number) => {
    const dates = [];
    for (let i = 0; i < num; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        dates.push(date);
    }
    return dates;
};

/**
 * 獲取面試顏色（根據索引）
 */
export const getInterviewColor = (index: number): string => {
    const colors = ["#4299e1", "#48bb78", "#ed8936", "#667eea", "#ed64a6", "#48bb78", "#4299e1", "#9f7aea"];
    return colors[index % colors.length];
};

/**
 * 生成時間槽列表
 */
export const generateTimeSlots = (earliestTime: number, latestTime: number): string[] => {
    const slots: string[] = [];
    for (let hour = earliestTime; hour <= latestTime; hour++) {
        slots.push(`${String(hour).padStart(2, "0")}:00`);
        slots.push(`${String(hour).padStart(2, "0")}:30`);
    }
    return slots;
};

/**
 * 檢查給定的時間是否在時間槽範圍內
 */
export const isTimeInSlot = (checkDate: Date, availabilitySlot: string): boolean => {
    try {
        if (!availabilitySlot.includes("/")) return false;
        
        const [slotStart, slotEnd] = availabilitySlot.split("/");
        const startDate = new Date(slotStart);
        const endDate = new Date(slotEnd);

        return (
            checkDate.getTime() >= startDate.getTime() &&
            checkDate.getTime() < endDate.getTime() &&
            checkDate.toDateString() === startDate.toDateString()
        );
    } catch (e) {
        console.error("時間格式錯誤:", e);
        return false;
    }
};

/**
 * 為每個面試分配一個唯一的顏色索引
 */
export const generateInterviewColorMap = (scheduledInterviews: ScheduledInterview[]): Map<string, number> => {
    const colorMap = new Map<string, number>();
    scheduledInterviews.forEach((interview, index) => {
        const interviewKey = `${interview.interviewees.map(idx => idx.id).join("-")}-${interview.startTime}`;
        colorMap.set(interviewKey, index % 8); // 最多使用8種顏色循環
    });
    return colorMap;
};

/**
 * 獲取給定日期和時間槽的面試
 */
export const getTimeSlotInterviews = (
    date: Date, 
    timeSlot: string, 
    scheduledInterviews: ScheduledInterview[], 
    interviewColors: Map<string, number>
) => {
    const [hours, minutes] = timeSlot.split(":");
    const checkDate = new Date(date);
    checkDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

    const currentSlotTime = checkDate.getTime();
    const slotDuration = 30 * 60 * 1000; // 30 minutes in milliseconds

    return scheduledInterviews
        .filter((interview) => {
            const startTime = new Date(interview.startTime);
            const endTime = new Date(interview.endTime);

            return (
                currentSlotTime >= startTime.getTime() &&
                currentSlotTime < endTime.getTime() &&
                startTime.getDate() === checkDate.getDate() &&
                startTime.getMonth() === checkDate.getMonth() &&
                startTime.getFullYear() === checkDate.getFullYear()
            );
        })
        .map((interview) => {
            const startTime = new Date(interview.startTime);
            const endTime = new Date(interview.endTime);

            const isStart = currentSlotTime === startTime.getTime();
            const isEnd = currentSlotTime === endTime.getTime() - slotDuration;

            // 使用面試唯一識別符來確定顏色
            const interviewKey = `${interview.interviewees.map(idx => idx.id).join("-")}-${interview.startTime}`;
            const colorIndex = interviewColors.get(interviewKey) || 0;

            return {
                ...interview,
                isStart,
                isEnd,
                colorIndex,
            };
        });
};

/**
 * 獲取給定日期和時間槽的面試
 */
export const getTimeSlotInterviewsWithPreprocess = (
    date: Date, 
    timeSlot: string, 
    preprocessedScheduledInterviews: ScheduledInterview[], 
    interviewColors: Map<string, number>
) => {
    const [hours, minutes] = timeSlot.split(":");
    const checkDate = new Date(date);
    checkDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

    const currentSlotTime = checkDate.getTime();
    const slotDuration = 30 * 60 * 1000; // 30 minutes in milliseconds

    return preprocessedScheduledInterviews.map((interview) => {
            const startTime = new Date(interview.startTime);
            const endTime = new Date(interview.endTime);

            const isStart = currentSlotTime === startTime.getTime();
            const isEnd = currentSlotTime === endTime.getTime() - slotDuration;

            // 使用面試唯一識別符來確定顏色
            const interviewKey = `${interview.interviewees.map(idx => idx.id).join("-")}-${interview.startTime}`;
            const colorIndex = interviewColors.get(interviewKey) || 0;

            return {
                ...interview,
                isStart,
                isEnd,
                colorIndex,
            };
        });
};
