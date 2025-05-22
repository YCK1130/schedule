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
    const colors = ["#4299E1B3", "#48BB78B3", "#ED8936B3", "#667EEAB3", "#ED64A6B3", "#F6AD55B3", "#81E6D9B3", "#9F7AEAB3"];
    // const colors = ["#4299e1", "#48bb78", "#ed8936", "#667eea", "#ed64a6", "#48bb78", "#4299e1", "#9f7aea"];
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
function adjustColor(input: string, amount: number): string {
    let r,
        g,
        b,
        a = 1;

    if (input.startsWith("#")) {
        let hex = input.slice(1);

        if (hex.length === 3) {
            hex = hex
                .split("")
                .map((c) => c + c)
                .join("");
        }

        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    } else if (input.startsWith("rgb")) {
        const match = input.match(/rgba?\(([^)]+)\)/);
        const values = (match ? match[1] : ",,").split(",").map((v) => parseFloat(v.trim()));

        [r, g, b] = values;
        if (values.length === 4) {
            a = values[3];
        }
    } else {
        throw new Error("Unsupported color format");
    }

    // 调整亮度，clamp 到 0~255
    r = Math.min(255, Math.max(0, r + amount));
    g = Math.min(255, Math.max(0, g + amount));
    b = Math.min(255, Math.max(0, b + amount));

    if (a < 1) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    } else {
        return `rgb(${r}, ${g}, ${b})`;
    }
}

/**
 * 為每個面試分配一個唯一的顏色索引
 */
export const generateInterviewColorMap = (scheduledInterviews: ScheduledInterview[]): Map<string, string> => {
    const colorMap = new Map<string, string>();
    scheduledInterviews.forEach((interview, index) => {
        const interviewKey = `${interview.interviewees.map((idx) => idx.id).join("-")}-${interview.startTime}`;
        colorMap.set(interviewKey, adjustColor(getInterviewColor(Math.floor(Date.parse(interview.startTime) / 997 / 101e5+index)), 10*(index%10-5))); // 最多使用8種顏色循環
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
    interviewColors: Map<string, string>
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
            const interviewKey = `${interview.interviewees.map((idx) => idx.id).join("-")}-${interview.startTime}`;
            const color = interviewColors.get(interviewKey) || getInterviewColor(0);

            return {
                ...interview,
                isStart,
                isEnd,
                color,
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
    interviewColors: Map<string, string>
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
        const interviewKey = `${interview.interviewees.map((idx) => idx.id).join("-")}-${interview.startTime}`;
        const color = interviewColors.get(interviewKey) || getInterviewColor(0);

        return {
            ...interview,
            isStart,
            isEnd,
            color,
        };
    });
};
