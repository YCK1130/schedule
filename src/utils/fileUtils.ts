import { cloneDeep } from "lodash";
import Papa from "papaparse";
import { v4 as uuid } from "uuid";
import * as XLSX from "xlsx";
import { colMapping } from "./const";
import { formatTimeSlots } from "./timeUtils";

/**
 * 將原始資料格式化為應用程序需要的格式
 */
export const formatData = (data: any[]): any[] => {
    return data.map((item: any) => {
        const formattedItem: any = {};
        for (const key in item) {
            const mappedKey = colMapping.get(key.toLowerCase());

            // 處理不同格式的時間輸入
            if (mappedKey === "availability") {
                // 處理類似 "7/31 20:00 - 21:00" 的格式
                if (typeof item[key] === "string") {
                    formattedItem[mappedKey] = formatTimeSlots(item[key]);
                } else {
                    formattedItem[mappedKey] = item[key];
                }
                formattedItem["origin_availability"] = cloneDeep(formattedItem[mappedKey]);
                formattedItem["input_availability"] = cloneDeep(item[key]);
            } else if (mappedKey) {
                formattedItem[mappedKey] = item[key];
            }

            formattedItem[key] = item[key];
        }
        if (!("id" in formattedItem)) {
            formattedItem.id = `${formattedItem.name}${uuid()}`;
        }
        return formattedItem;
    });
};

/**
 * 解析 Excel 檔案
 */
export const parseExcelFile = (file: File): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const buffer = e.target?.result as ArrayBuffer;
                const data = new Uint8Array(buffer);
                const workbook = XLSX.read(data, { type: "array" });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                resolve(jsonData);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file);
    });
};

/**
 * 處理檔案上傳
 */
export const handleFileUpload = async (
    file: File,
    setFileName: (name: string) => void,
    onDataLoaded: (data: any[]) => void,
    fileType: string
): Promise<void> => {
    if (!file) return;

    setFileName(file.name);

    try {
        if (file.name.endsWith(".csv")) {
            Papa.parse(file, {
                header: true,
                complete: (results) => {
                    onDataLoaded(formatData(results.data));
                },
                error: (error) => {
                    console.error("Error parsing file:", error);
                    alert(`Error parsing ${fileType} file`);
                },
            });
        } else {
            // Handle Excel files
            const data = await parseExcelFile(file);

            // 將資料轉換為符合需求的格式
            onDataLoaded(formatData(data));
        }
    } catch (error) {
        console.error("Error parsing file:", error);
        alert(`Error parsing ${fileType} file`);
    }
};

/**
 * 下載範例檔案
 */
export const downloadSample = (type: string): void => {
    const samplePath = `/schedule/samples/sample_${type}.csv`;
    const link = document.createElement("a");
    link.href = samplePath;
    link.download = `sample_${type}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

/**
 * 載入範例資料
 */
export const loadSampleData = async (type: string, setFileName: (name: string) => void, onDataLoaded: (data: any[]) => void): Promise<void> => {
    const mapping: Map<string, string> = new Map([
        ["interviewers", "/schedule/samples/real/interview_schedule_interviewers.csv"],
        ["interviewees", "/schedule/samples/real/interview_schedule_interviewees.csv"],
    ]);
    try {
        const response = await fetch(`${mapping.get(type)}`);
        const blob = await response.blob();
        const file = new File([blob], `sample_${type}.csv`, { type: "text/csv" });
        await handleFileUpload(file, setFileName, onDataLoaded, type);
    } catch (error) {
        console.error("Error loading sample:", error);
        alert(`Error loading sample ${type} file`);
    }
};
