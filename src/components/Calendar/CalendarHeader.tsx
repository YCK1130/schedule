import React from "react";
import { useScheduling } from "../../contexts/SchedulingContext";

const CalendarHeader: React.FC = () => {
    const {
        displayInfo: { startDate, daysToShow },
    } = useScheduling();
    const weekDays = ["日", "一", "二", "三", "四", "五", "六"];

    const getDayHeaders = () => {
        const headers = [];
        const currentDate = new Date(startDate);

        // 先加入時間列的標題
        headers.push({ key: "time", text: "時間" });

        // 遍歷所有日期，但只取週一到週五
        for (let i = 0; i < daysToShow; i++) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() + i);

            const month = date.getMonth() + 1;
            const day = date.getDate();
            const weekDay = weekDays[date.getDay()];

            headers.push({
                key: date.toISOString(),
                text: `${month}/${day} (${weekDay})`,
            });
        }

        return headers;
    };

    return (
        <div className="calendar-header">
            {getDayHeaders().map((header) => (
                <div key={header.key} className="calendar-header-cell">
                    {header.text}
                </div>
            ))}
        </div>
    );
};

export default CalendarHeader;
