import * as fs from 'fs';
import * as path from 'path';

/**
 * 隨機生成2-3小時的時間段，有些從XX:30開始
 */
function generateRandomTimeSlot(baseDate: string): string {
    // 隨機選擇開始時間（6:00 到 18:00，確保有足夠時間）
    const startHour = Math.floor(Math.random() * 13) + 6; // 6-18
    // 30%機率從XX:30開始
    const startMinute = Math.random() < 0.3 ? 30 : 0;
    
    // 隨機選擇時長（2-3小時）
    const duration = Math.random() < 0.5 ? 2 : 3;
    
    const endHour = startHour + duration;
    const endMinute = startMinute;
    
    // 確保結束時間不超過22:00
    const actualEndHour = Math.min(endHour, 22);
    const actualEndMinute = actualEndHour === 22 ? 0 : endMinute;
    
    const startTime = `${baseDate} ${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;
    const endTime = `${baseDate} ${actualEndHour.toString().padStart(2, '0')}:${actualEndMinute.toString().padStart(2, '0')}`;
    
    return `${startTime} - ${endTime}`;
}

/**
 * 從原始時間段提取日期，生成新的長時間段
 */
function modifyTimeSlots(originalTimeSlots: string): string {
    // 分割多個時間段
    const slots = originalTimeSlots.split(',').map(slot => slot.trim());
    
    // 提取所有日期
    const dates = slots.map(slot => {
        const match = slot.match(/(\d+\/\d+)/);
        return match ? match[1] : '7/1';
    });
    
    // 去重日期，隨機保留1-2個
    const uniqueDates = [...new Set(dates)];
    const selectedDates = uniqueDates
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.max(1, Math.floor(Math.random() * 2) + 1));
    
    // 為每個選定的日期生成新的時間段
    const newSlots: string[] = [];
    selectedDates.forEach(date => {
        newSlots.push(generateRandomTimeSlot(date));
    });
    
    return newSlots.join(', ');
}

// 執行腳本
const inputFile = path.join(process.cwd(), 'public/samples/real/interview_schedule_interviewees.csv');
const outputFile = path.join(process.cwd(), 'public/samples/real/interview_schedule_interviewees_2-3hr.csv');

console.log('🚀 開始處理CSV檔案，生成2-3小時時間段...');
console.log(`📂 輸入檔案: ${inputFile}`);
console.log(`📂 輸出檔案: ${outputFile}`);

if (!fs.existsSync(inputFile)) {
    console.error('❌ 輸入檔案不存在!');
    process.exit(1);
}

try {
    // 讀取檔案
    const content = fs.readFileSync(inputFile, 'utf-8');
    console.log(`📝 檔案大小: ${content.length} 字符`);
    
    // 使用更簡單的方法：逐行處理，直接替換引號內的內容
    const processedContent = content.replace(/"([^"]+)"/g, (match, timeSlots) => {
        // 檢查是否是時間段格式
        if (timeSlots.includes(':') && timeSlots.includes('/')) {
            const newTimeSlots = modifyTimeSlots(timeSlots);
            return `"${newTimeSlots}"`;
        }
        return match; // 不是時間段就保持原樣
    });
    
    // 寫入新檔案
    fs.writeFileSync(outputFile, processedContent, 'utf-8');
    console.log(`✅ 檔案處理完成: ${outputFile}`);
    
    // 顯示統計
    console.log(`📊 處理統計:`);
    console.log(`   - 原始檔案大小: ${fs.statSync(inputFile).size} bytes`);
    console.log(`   - 新檔案大小: ${fs.statSync(outputFile).size} bytes`);
    
    // 顯示前幾行樣本
    console.log(`\n📋 前5行樣本:`);
    const sampleLines = processedContent.split('\n').slice(0, 6);
    sampleLines.forEach((line, index) => {
        if (index === 0) {
            console.log(`   ${index}: ${line}`);
        } else if (line.trim()) {
            const timeMatch = line.match(/"([^"]+)"/);
            const nameMatch = line.match(/^([^,]+)/);
            const name = nameMatch ? nameMatch[1] : '未知';
            const time = timeMatch ? timeMatch[1] : '無';
            console.log(`   ${index}: ${name} -> ${time}`);
        }
    });
    
} catch (error) {
    console.error('❌ 處理檔案時發生錯誤:', error);
}
