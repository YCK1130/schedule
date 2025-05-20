#!/usr/bin/env node
import { existsSync, mkdirSync, writeFileSync } from "fs";
import Papa from "papaparse";
import path from "path";
import * as XLSX from "xlsx";

interface InterviewerData {
    幹部姓名: string;
    職位: string;
    可面試時間: string;
}

interface IntervieweeData {
    申請者姓名: string;
    申請身份: string;
    可面試時間: string;
}

/**
 * 生成指定格式的日期時間字符串（例如：7/31 20:00 - 21:00）
 */
function generateFormattedTimeSlot(month: number, day: number, hour: number): string {
    const startTime = `${hour}:00`;
    const endTime = `${hour + 1}:00`;
    return `${month}/${day} ${startTime} - ${endTime}`;
}

/**
 * 生成多個時間段，用逗號分隔
 */
function generateMultipleTimeSlots(count: number): string {
    const slots: string[] = [];
    const month = 7; // 使用 7 月
    
    // 生成不同日期的時間段
    for (let i = 0; i < count; i++) {
        const day = 1 + Math.floor(Math.random() *14); // 從 7/30 開始
        const hour = Math.floor(Math.random() * 15) + 6; // 時間從 06:00 到 21:00
        slots.push(generateFormattedTimeSlot(month + Math.floor(day/31), day%31, hour));
    }
    
    return slots.join(", ");
}

/**
 * 生成面試官數據
 */
function generateInterviewers(count: number): InterviewerData[] {
    const positions = ["人資", "社長", "學術", "財務", "公關", "技術", "活動"];
    
    return Array.from({ length: count }, (_, i) => {
        // 每個面試官有 1-3 個可面試時段
        const timeSlotCount = Math.floor(Math.random() * 10) + 10;
        
        return {
            幹部姓名: `${positions[i % positions.length]} ${String.fromCharCode((65 + i) % 96)}`,
            職位: positions[i % positions.length],
            可面試時間: generateMultipleTimeSlots(timeSlotCount)
        };
    }).sort((a, b) => a.幹部姓名.localeCompare(b.幹部姓名));
}

/**
 * 生成應試者數據
 */
function generateInterviewees(count: number): IntervieweeData[] {
    const positions = ["專案生", "研習生"];
    
    return Array.from({ length: count }, (_, i) => {
        // 每個應試者有 2-4 個可面試時段
        const timeSlotCount = Math.floor(Math.random() * 3) + 2;
        
        return {
            申請者姓名: `${positions[i % positions.length]} ${i}`, // A, B, C...
            申請身份: positions[i % positions.length],
            可面試時間: generateMultipleTimeSlots(timeSlotCount)
        };
    }).sort((a, b) => a.申請者姓名.localeCompare(b.申請者姓名));
}

/**
 * 保存數據為 CSV 檔案
 */
function saveToCSV(data: any[], filename: string): void {
    const csv = Papa.unparse(data);
    writeFileSync(filename, csv);
}

/**
 * 保存數據為 Excel 檔案
 */
function saveToExcel(interviewers: InterviewerData[], interviewees: IntervieweeData[], filename: string): void {
    const wb = XLSX.utils.book_new();
    
    // 添加幹部時間表
    const wsInterviewers = XLSX.utils.json_to_sheet(interviewers);
    XLSX.utils.book_append_sheet(wb, wsInterviewers, "幹部時間");
    
    // 添加面試者時間表
    const wsInterviewees = XLSX.utils.json_to_sheet(interviewees);
    XLSX.utils.book_append_sheet(wb, wsInterviewees, "面試者時間");
    
    XLSX.writeFile(wb, filename);
}

/**
 * 解析命令行參數
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options: {
        format: "csv" | "xlsx";
        interviewersCount: number;
        intervieweesCount: number;
        outputDir: string;
    } = {
        format: "xlsx",
        interviewersCount: 5,
        intervieweesCount: 10,
        outputDir: path.join(process.cwd(), "public/samples/real")
    };

    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case "--format":
            case "-f":
                options.format = args[++i] as "csv" | "xlsx";
                break;
            case "--interviewers":
            case "-i":
                options.interviewersCount = parseInt(args[++i], 10);
                break;
            case "--interviewees":
            case "-e":
                options.intervieweesCount = parseInt(args[++i], 10);
                break;
            case "--output":
            case "-o":
                options.outputDir = args[++i];
                break;
            case "--help":
            case "-h":
                printHelp();
                process.exit(0);
                break;
        }
    }

    return options;
}

/**
 * 顯示命令行幫助信息
 */
function printHelp() {
    console.log(`
使用方式: tsx realFormatGenerator.ts [選項]

選項:
  --format, -f         輸出格式 (csv 或 xlsx) [預設: xlsx]
  --interviewers, -i   生成的幹部數量 [預設: 5]
  --interviewees, -e   生成的面試者數量 [預設: 10]
  --output, -o         輸出目錄 [預設: ./public/samples/real]
  --help, -h           顯示此幫助信息

範例:
  tsx realFormatGenerator.ts -f xlsx -i 8 -e 15 -o ./public/samples/real
`);
}

/**
 * 主函數
 */
function main() {
    const options = parseArgs();
    
    // 確保輸出目錄存在
    if (!existsSync(options.outputDir)) {
        mkdirSync(options.outputDir, { recursive: true });
    }
    
    // 生成數據
    const interviewers = generateInterviewers(options.interviewersCount);
    const interviewees = generateInterviewees(options.intervieweesCount);
    
    // 生成檔案名稱，包含時間戳記
    // const timestamp = new Date().getTime();
    const baseName = `interview_schedule`;
    
    // 根據指定格式保存檔案
    if (options.format === "csv") {
        // CSV格式，生成兩個檔案
        saveToCSV(interviewers, path.join(options.outputDir, `${baseName}_interviewers.csv`));
        saveToCSV(interviewees, path.join(options.outputDir, `${baseName}_interviewees.csv`));
    } else {
        // Excel格式，生成單一檔案，具有兩個分頁
        saveToExcel(
            interviewers, 
            interviewees, 
            path.join(options.outputDir, `${baseName}.xlsx`)
        );
    }
}

// 直接執行主函數 (在 ESM 環境中不能使用 require.main === module)
main();