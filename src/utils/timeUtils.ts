/**
 * 處理不同格式的時間輸入，統一轉換為系統格式
 */
export const formatTimeSlots = (timeString: string): string[] => {
    if (!timeString) return [];

    // 將全形數字轉換為半形數字
    timeString = convertFullWidthToHalfWidth(timeString);

    // 按逗號分割多個時間段
    const slots = timeString.split(",").map((slot) => slot.trim());

    return slots
        .flatMap((slot) => {
            // 檢查是否已經是標準格式 "yyyy-mm-ddThh:mm:ss/yyyy-mm-ddThh:mm:ss"
            if (slot.includes("/") && slot.includes("T")) {
                // 如果已經是標準格式，檢查是否需要拆分
                const [start, end] = slot.split("/");
                const startDate = new Date(start);
                const endDate = new Date(end);
                
                // 計算時間差（毫秒）
                const diffMs = endDate.getTime() - startDate.getTime();
                const diffHours = diffMs / (1000 * 60 * 60);
                
                // 如果超過一小時，拆分成每小時一個時間段
                if (diffHours > 1) {
                    return splitIntoHourlySlots(startDate, endDate);
                }
                return [slot];
            }

            // 處理 "7/31 20:00 - 21:00" 或 "7/31 20:00 ~ 21:00" 等類似格式
            // 支援多種分隔符號: "-", "~", "～", "－"
            const separators = ["-", "~", "～", "－"];
            const weekDays = ["日", "一", "二", "三", "四", "五", "六", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const parentheses = [["（", "）"], ["(", ")"]];
            let dateTime = "";
            let endTime = "";
            let slotCopy = slot;
            
            // 處理帶括號的星期信息
            for (const [open, close] of parentheses) {
                if (slotCopy.includes(open) && slotCopy.includes(close)) {
                    const parts = slotCopy.split(open);
                    if (parts.length > 1) {
                        const afterOpen = parts[1];
                        const closeParts = afterOpen.split(close);
                        if (closeParts.length > 1) {
                            // 將括號內的內容移除，但保留其他部分
                            slotCopy = parts[0] + closeParts.slice(1).join(close);
                        }
                    }
                    break;
                }
            }

            // 處理不帶括號的星期信息
            for (const weekDay of weekDays) {
                if (slotCopy.includes(weekDay)) {
                    slotCopy = slotCopy.replace(weekDay, "").trim();
                    break;
                }
            }
            
            // 確保所有多餘的空格被移除
            slotCopy = slotCopy.replace(/\s+/g, " ").trim();
            
            // 尋找使用的分隔符號
            for (const separator of separators) {
                if (slotCopy.includes(separator)) {
                    [dateTime, endTime] = slotCopy.split(separator).map((part) => part.trim());
                    break;
                }
            }

            // 如果找到分隔符號且成功分割
            if (dateTime && endTime) {
                try {
                    // 進一步解析日期和時間
                    const dateTimeParts = dateTime.split(" ");
                    const date = dateTimeParts[0]; // 例如: "7/31"
                    const startTime = dateTimeParts[1] || "00:00"; // 例如: "20:00"

                    // 構建完整的日期時間
                    const currentYear = new Date().getFullYear();
                    const [month, day] = date.split("/");

                    // 創建開始和結束時間，使用本地時區
                    const startDateTime = new Date(currentYear, parseInt(month) - 1, parseInt(day));
                    const [startHour, startMinute] = startTime.split(":");
                    startDateTime.setHours(parseInt(startHour), parseInt(startMinute), 0, 0);

                    // 創建結束時間
                    const endDateTime = new Date(startDateTime);
                    const [endHour, endMinute] = endTime.split(":");
                    endDateTime.setHours(parseInt(endHour), parseInt(endMinute), 0, 0);

                    // 確保結束時間晚於開始時間
                    if (endDateTime <= startDateTime) {
                        // 如果結束時間早於或等於開始時間，可能是跨越午夜的情況
                        // 將結束時間調整到下一天
                        if (parseInt(endHour) < parseInt(startHour)) {
                            endDateTime.setDate(endDateTime.getDate() + 1);
                        }
                    }

                    // 計算時間差（毫秒）
                    const diffMs = endDateTime.getTime() - startDateTime.getTime();
                    const diffHours = diffMs / (1000 * 60 * 60);
                    
                    // 如果時間差大於1小時，將其分割成多個1小時的時間段
                    if (diffHours > 1) {
                        return splitIntoHourlySlots(startDateTime, endDateTime);
                    }
                    
                    return [`${formatDateToString(startDateTime)}/${formatDateToString(endDateTime)}`];
                } catch (error) {
                    console.error(`無法解析時間格式: ${slot}`, error);
                    return []; // 返回空陣列表示無法解析
                }
            }

            // 無法解析的格式，返回空陣列
            if (slot.trim() === "") return [];
            return [slot]; // 返回原始格式
        })
        .filter(Boolean);
};

/**
 * 輔助函數：格式化日期為標準字符串
 */
export const formatDateToString = (date: Date): string => {
    const isoLike = date.toLocaleString("sv-SE").replace(" ", "T");
    return isoLike.substring(0, 19); // 去掉可能的毫秒部分
};

/**
 * 輔助函數：將長時間段拆分為每小時一個的時間段
 */
export const splitIntoHourlySlots = (startDate: Date, endDate: Date): string[] => {
    const slots: string[] = [];
    const currentSlotStart = new Date(startDate);
    
    while (currentSlotStart < endDate) {
        // 創建當前時間段的結束時間（開始時間 + 1小時，或者如果剩餘時間不足1小時則為原始結束時間）
        const currentSlotEnd = new Date(currentSlotStart);
        currentSlotEnd.setHours(currentSlotEnd.getHours() + 1);
        
        // 確保不超過原始的結束時間
        const slotEnd = currentSlotEnd <= endDate ? currentSlotEnd : new Date(endDate);
        
        // 添加格式化後的時間段
        slots.push(`${formatDateToString(currentSlotStart)}/${formatDateToString(slotEnd)}`);
        
        // 將開始時間設為當前結束時間，準備下一個小時的時間段
        currentSlotStart.setTime(currentSlotEnd.getTime());
    }
    
    return slots;
};

/**
 * 將全形數字和符號轉換為半形
 */
export const convertFullWidthToHalfWidth = (str: string): string => {
    if (!str) return '';
    
    // 全形數字的 Unicode 範圍為 U+FF10 到 U+FF19
    // 半形數字的 Unicode 範圍為 U+0030 到 U+0039
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const code = str.charCodeAt(i);
        
        // 全形數字 (０-９) 轉換為半形 (0-9)
        if (code >= 0xFF10 && code <= 0xFF19) {
            result += String.fromCharCode(code - 0xFF10 + 0x30);
        } 
        // 全形冒號 (：) 轉換為半形 (:)
        else if (code === 0xFF1A) {
            result += ':';
        }
        // 全形斜線 (／) 轉換為半形 (/)
        else if (code === 0xFF0F) {
            result += '/';
        }
        // 其他字符保持不變
        else {
            result += char;
        }
    }
    return result;
};

/**
 * 格式化時間範圍為易讀格式
 */
export const formatTimeRange = (startTime: string, endTime: string) => {
    if (!startTime || !endTime) return { date: "", time: "" };
    
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    
    const month = startDate.getMonth() + 1;
    const day = startDate.getDate();
    
    const startHours = startDate.getHours().toString().padStart(2, "0");
    const startMinutes = startDate.getMinutes().toString().padStart(2, "0");
    const endHours = endDate.getHours().toString().padStart(2, "0");
    const endMinutes = endDate.getMinutes().toString().padStart(2, "0");

    return {
        date: `${month}/${day}`,
        time: `${startHours}:${startMinutes} ~ ${endHours}:${endMinutes}`,
    };
};
