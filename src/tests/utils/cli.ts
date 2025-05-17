#!/usr/bin/env node
import { mkdir, writeFileSync } from "fs";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { DataGenerator } from "./dataExportGenerator";

function parseArgs() {
    const args = process.argv.slice(2);
    const options: any = {
        format: "csv",
        type: "interviewers",
        count: 5,
        config: {},
    };

    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case "--format":
            case "-f":
                options.format = args[++i];
                break;
            case "--type":
            case "-t":
                options.type = args[++i];
                break;
            case "--count":
            case "-n":
                options.count = parseInt(args[++i], 10);
                break;
            case "--filename":
                options.filename = args[++i];
                break;
            case "--start-date":
                options.config.startDate = new Date(args[++i]);
                break;
            case "--end-date":
                options.config.endDate = new Date(args[++i]);
                break;
            case "--start-time":
                if (!options.config.dailyTimeRange) options.config.dailyTimeRange = {};
                options.config.dailyTimeRange.start = parseInt(args[++i], 10);
                break;
            case "--end-time":
                if (!options.config.dailyTimeRange) options.config.dailyTimeRange = {};
                options.config.dailyTimeRange.end = parseInt(args[++i], 10);
                break;
            case "--duration":
                options.config.interviewDuration = parseInt(args[++i], 10);
                break;
            case "--specializations":
                options.config.specializations = args[++i].split(",");
                break;
            case "--positions":
                options.config.positions = args[++i].split(",");
                break;
            case "--email-domain":
                options.config.emailDomain = args[++i];
                break;
            case "--interviewer-prefix":
                if (!options.config.namePrefix) options.config.namePrefix = {};
                options.config.namePrefix.interviewer = args[++i];
                break;
            case "--interviewee-prefix":
                if (!options.config.namePrefix) options.config.namePrefix = {};
                options.config.namePrefix.interviewee = args[++i];
                break;
            case "--interviewer-availability":
                if (!options.config.availabilityDistribution) options.config.availabilityDistribution = {};
                options.config.availabilityDistribution.interviewer = parseFloat(args[++i]);
                break;
            case "--interviewee-availability":
                if (!options.config.availabilityDistribution) options.config.availabilityDistribution = {};
                options.config.availabilityDistribution.interviewee = parseFloat(args[++i]);
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

function printHelp() {
    console.log(`
使用方式：tsx cli.ts [選項]

必要選項：
  --type, -t        資料類型 (interviewers 或 interviewees)
  --count, -n       要生成的資料筆數

檔案選項：
  --format, -f      輸出格式 (csv, xlsx, 或 json) [預設: csv]
  --filename        輸出檔案名稱 [預設: 自動生成]

時間設定：
  --start-date      開始日期 (YYYY-MM-DD)
  --end-date        結束日期 (YYYY-MM-DD)
  --start-time      每日開始時間 (0-23)
  --end-time        每日結束時間 (0-23)
  --duration        面試時長（分鐘）

資料設定：
  --specializations 專長列表 (用逗號分隔)
  --positions       職位列表 (用逗號分隔)
  --email-domain    電子郵件網域
  
命名設定：
  --interviewer-prefix  面試官名稱前綴
  --interviewee-prefix  應試者名稱前綴

可用性設定：
  --interviewer-availability  面試官時段可用率 (0-1)
  --interviewee-availability  應試者時段可用率 (0-1)

其他：
  --help, -h        顯示此說明

範例：
  tsx cli.ts -t interviewers -n 10 -f xlsx --start-date 2025-06-01 --end-date 2025-06-07
  tsx cli.ts -t interviewees -n 5 --interviewer-prefix INT --interviewee-prefix CAN
`);
}

// 判斷是否為主程式執行
const isMainModule = process.argv[1] && process.argv[1].endsWith("cli.ts");
if (isMainModule) {
    const options = parseArgs();
    const generator = new DataGenerator(options.config);

    try {
        const data = generator.generateData({
            type: options.type,
            count: options.count,
        });

        const filename: string = options.filename || `${options.type}_${new Date().getTime()}`;
        // create data dir first
        const dirname = filename.split("/").slice(0, -1).join("/");
        console.log("Creating ...", dirname);
        mkdir(dirname, { recursive: true }, (err) => {
            if (err) throw err;
        });

        await new Promise(resolve => setTimeout(resolve, 1000)); // wait for directory creation
        // 根據格式保存檔案
        switch (options.format) {
            case "csv": {
                const csv = Papa.unparse(data);
                writeFileSync(`${filename}.csv`, csv);
                break;
            }
            case "xlsx": {
                const wb = XLSX.utils.book_new();
                const ws = XLSX.utils.json_to_sheet(data);
                XLSX.utils.book_append_sheet(wb, ws, options.type);
                XLSX.writeFile(wb, `${filename}.xlsx`);
                break;
            }
            case "json": {
                writeFileSync(`${filename}.json`, JSON.stringify(data, null, 2));
                break;
            }
        }

        console.log(`成功生成 ${options.count} 筆 ${options.type} 資料，已儲存為 ${filename}.${options.format}`);
    } catch (error) {
        console.error("生成資料時發生錯誤：", error);
        process.exit(1);
    }
}
