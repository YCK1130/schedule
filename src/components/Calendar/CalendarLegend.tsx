import React from 'react';

interface CalendarLegendProps {
  isScheduleView?: boolean;
}

const CalendarLegend: React.FC<CalendarLegendProps> = ({ isScheduleView = false }) => {
  const availabilityLegendItems = [
    { level: 0, text: '未排程' },
    // { level: 1, text: '部分可用 (至少一方)' },
    // { level: 2, text: '多方可用 (兩方)' },
    // { level: 3, text: '完全可用 (三方皆可)' },
  ];

  const scheduleLegendItems = [
    { level: 0, text: '無面試' },
    { level: 3, text: '已排程面試' },
  ];

  const legendItems = isScheduleView ? scheduleLegendItems : availabilityLegendItems;

  return (
    <div className="calendar-legend">
      <span className="legend-title">圖例：</span>
      {legendItems.map(item => (
        <div key={item.level} className="legend-item">
          <span className={`legend-color availability-level-${item.level}`} />
          <span className="legend-text">{item.text}</span>
        </div>
      ))}
      {/* <div className="legend-note">
        {isScheduleView ? (
          '提示：點擊時段查看詳細面試資訊'
        ) : (
          '數字代表：面試官/應試者/會議室'
        )}
      </div> */}
    </div>
  );
};

export default CalendarLegend;