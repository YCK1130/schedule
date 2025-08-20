import { saveAs } from "file-saver";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import type { Interviewee, Interviewer, ScheduledInterview } from "../types";
import { formatTimeRange } from "./timeUtils";

/**
 * 將面試官或應試者的時間格式化為匯出使用的資料
 */
export const prepareParticipantData = (
    isInterviewer: boolean,
    participants: Interviewer[] | Interviewee[],
    scheduledInterviews: ScheduledInterview[]
) => {
    const filteredInterviews = scheduledInterviews.filter((interview) => interview[isInterviewer ? "interviewers" : "interviewees"].length > 0);

    return participants.map((participant) => {
        // 查找此人參與的所有面試
        const participantInterviews = filteredInterviews.filter((interview) =>
            interview[isInterviewer ? "interviewers" : "interviewees"].some((p) => p.id === participant.id)
        );

        // 收集所有時間段
        const timeSlots = participantInterviews.map((interview) => ({
            ...formatTimeRange(interview.startTime, interview.endTime),
            id: interview.id || -1,
        }));
        const timeMap = new Map<string, string | number>();
        if (timeSlots.length === 1) {
            timeMap.set("date", timeSlots[0].date);
            timeMap.set("time", timeSlots[0].time);
            timeMap.set("id", timeSlots[0].id);
        } else {
            timeSlots.forEach((s, idx) => {
                const date = s.date;
                const time = s.time;
                const id = s.id;
                timeMap.set(`date_${idx + 1}`, date);
                timeMap.set(`time_${idx + 1}`, time);
                timeMap.set(`id_${idx + 1}`, id);
            });
        }

        // 將參與者的基本信息與參與的面試時間合併
        return {
            name: participant.name,
            position: participant.position || "",
            email: participant.email || "",
            timeMap: timeMap,
            timeSlotsNum: timeSlots.length,
            input_availability: participant.input_availability,
        };
    });
};

/**
 * 將面試資料匯出為 CSV
 */
export const exportToCsv = (
    exportType: string,
    scheduledInterviews: ScheduledInterview[],
    interviewers: Interviewer[],
    interviewees: Interviewee[]
): void => {
    if (scheduledInterviews.length === 0) return;

    let csvContent = "";
    let fileName = "";

    switch (exportType) {
        case "interviews": {
            // 匯出面試數據
            const interviewsData = scheduledInterviews.map((interview) => ({
                interviewers: interview.interviewers.map((int) => int.name).join(", "),
                interviewees: interview.interviewees.map((int) => int.name).join(", "),
                id: interview.id,
                position: interview.interviewees[0].position,
                ...formatTimeRange(interview.startTime, interview.endTime),
            }));

            csvContent = Papa.unparse(
                interviewsData
                    .map((r) => ({
                        日期: r.date,
                        場次時間: r.time,
                        面試編號: r.id || -1,
                        申請者身份: r.position,
                        幹部: r.interviewers,
                        面試者: r.interviewees,
                    }))
                    .sort((a, b) => a.日期.localeCompare(b.日期) || a.場次時間.localeCompare(b.場次時間) || a.面試編號 - b.面試編號)
            );
            fileName = "interview_schedule.csv";
            break;
        }

        case "interviewers": {
            // 匯出面試官數據
            const interviewersData = prepareParticipantData(true, interviewers, scheduledInterviews);
            const flatData = interviewersData.reduce((acc, curr) => {
                const { name, position, timeMap } = curr;
                timeMap.forEach((value, key) => {
                    const [type, index] = key.split("_");
                    if (type === "time" || type === "id") return;
                    const date = value;
                    const time = timeMap.get(`time_${index}`);
                    const id = timeMap.get(`id_${index}`);
                    if (typeof time === "string" && typeof date === "string" && typeof id === "number") {
                        acc.push({ name, position, date, time, id });
                    } else {
                        console.error("Invalid data type for time, date, or id", { time, date, id });
                    }
                });
                return acc;
            }, [] as { name: string; position: string; date: string; time: string; id: number }[]);

            csvContent = Papa.unparse(
                flatData
                    .map((r) => ({
                        姓名: r.name,
                        職位: r.position,
                        日期: r.date,
                        面試時間: r.time,
                        面試編號: r.id,
                    }))
                    .sort((a, b) => a.姓名.localeCompare(b.姓名))
            );
            fileName = "interviewers_schedule.csv";
            break;
        }

        case "interviewees": {
            // 匯出應試者數據
            const intervieweesData = prepareParticipantData(false, interviewees, scheduledInterviews);

            csvContent = Papa.unparse(
                intervieweesData
                    .map((r) => ({
                        姓名: r.name,
                        職位: r.position,
                        日期: r.timeMap.get("date"),
                        面試時間: r.timeMap.get("time"),
                        面試場次編號: r.timeMap.get("id"),
                        可面試時間: r.input_availability,
                    }))
                    .sort((a, b) => a.姓名.localeCompare(b.姓名))
            );
            fileName = "interviewees_schedule.csv";
            break;
        }

        case "interviewers_stats": {
            const interviewersStatsData = prepareParticipantData(true, interviewers, scheduledInterviews);
            const flatStatsData = interviewersStatsData.map((curr) => {
                const { name, position, timeSlotsNum } = curr;
                return { name, position, num: timeSlotsNum };
            });

            csvContent = Papa.unparse(
                flatStatsData
                    .map((r) => ({
                        姓名: r.name,
                        職位: r.position,
                        安排場次數: r.num,
                    }))
                    .sort((a, b) => a.姓名.localeCompare(b.姓名))
            );
            fileName = "interviewers_stats.csv";
            break;
        }
    }

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, fileName);
};

/**
 * 將選擇的數據匯出為 xlsx 檔案中的不同工作表
 */
export const exportToXlsx = (
    exportTypes: string[],
    scheduledInterviews: ScheduledInterview[],
    interviewers: Interviewer[],
    interviewees: Interviewee[]
): void => {
    if (scheduledInterviews.length === 0 || exportTypes.length === 0) return;

    // 創建新的工作簿
    const workbook = XLSX.utils.book_new();

    // 匯出面試數據
    if (exportTypes.includes("interviews")) {
        const interviewsData = scheduledInterviews.map((interview) => ({
            interviewers: interview.interviewers.map((int) => int.name).join(", "),
            interviewees: interview.interviewees.map((int) => int.name).join(", "),
            id: interview.id,
            position: interview.interviewees[0].position,
            ...formatTimeRange(interview.startTime, interview.endTime),
        }));

        const formattedData = interviewsData
            .map((r) => ({
                日期: r.date,
                場次時間: r.time,
                面試編號: r.id || -1,
                申請者身份: r.position,
                幹部: r.interviewers,
                面試者: r.interviewees,
            }))
            .sort((a, b) => a.日期.localeCompare(b.日期) || a.場次時間.localeCompare(b.場次時間) || a.面試編號 - b.面試編號);

        // 創建工作表
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "面試場次安排表");
    }

    // 匯出面試官各場次數據
    if (exportTypes.includes("interviewers")) {
        const interviewersData = prepareParticipantData(true, interviewers, scheduledInterviews);
        const flatData = interviewersData.reduce((acc, curr) => {
            const { name, position, timeMap } = curr;
            timeMap.forEach((value, key) => {
                const [type, index] = key.split("_");
                if (type === "time" || type === "id") return;
                const date = value;
                const time = timeMap.get(`time_${index}`);
                const id = timeMap.get(`id_${index}`);
                if (typeof time === "string" && typeof date === "string" && typeof id === "number") {
                    acc.push({ name, position, date, time, id });
                }
            });
            return acc;
        }, [] as { name: string; position: string; date: string; time: string; id: number }[]);

        const formattedData = flatData
            .map((r) => ({
                姓名: r.name,
                職位: r.position,
                日期: r.date,
                面試時間: r.time,
                面試編號: r.id,
            }))
            .sort((a, b) => a.姓名.localeCompare(b.姓名));

        // 創建工作表
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "面試官各場次安排");
    }

    // 匯出面試官統計數據
    if (exportTypes.includes("interviewers_stats")) {
        const interviewersStatsData = prepareParticipantData(true, interviewers, scheduledInterviews);
        const flatStatsData = interviewersStatsData.map((curr) => {
            const { name, position, timeSlotsNum } = curr;
            return { name, position, num: timeSlotsNum };
        });

        const formattedData = flatStatsData
            .map((r) => ({
                姓名: r.name,
                職位: r.position,
                安排場次數: r.num,
            }))
            .sort((a, b) => a.姓名.localeCompare(b.姓名));

        // 創建工作表
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "面試官場次統計");
    }

    // 匯出應試者數據
    if (exportTypes.includes("interviewees")) {
        const intervieweesData = prepareParticipantData(false, interviewees, scheduledInterviews);

        const formattedData = intervieweesData
            .map((r) => ({
                姓名: r.name,
                職位: r.position,
                日期: r.timeMap.get("date") || "配對失敗",
                面試時間: r.timeMap.get("time") || "配對失敗",
                面試場次編號: r.timeMap.get("id") || "配對失敗",
                可面試時間: r.input_availability,
            }))
            .sort((a, b) => a.姓名.localeCompare(b.姓名));

        // 創建工作表
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "應試者面試安排");
    }

    // 寫入緩衝區並下載
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "面試安排總表.xlsx");
};

/**
 * 獲取應試者的可用時間
 */
export const getAvailableTime = (interviewee: Interviewee): string => {
    if (Array.isArray(interviewee.input_availability)) {
        return interviewee.input_availability
            .map((slot) => {
                const { date, time } = formatTimeRange(slot.split("/")[0], slot.split("/")[1]);
                return `${date} ${time}`;
            })
            .join(", ");
    }
    return interviewee.input_availability;
};
