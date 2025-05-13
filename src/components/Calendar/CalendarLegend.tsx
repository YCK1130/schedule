import React from 'react';

const CalendarLegend: React.FC = () => {
  const legendItems = [
    { level: 0, text: '無人可用' },
    { level: 1, text: '部分可用 (至少一方)' },
    { level: 2, text: '多方可用 (兩方)' },
    { level: 3, text: '完全可用 (三方皆可)' },
  ];

  return (
    <div className="calendar-legend">
      <span className="legend-title">圖例：</span>
      {legendItems.map(item => (
        <div key={item.level} className="legend-item">
          <span className={`legend-color availability-level-${item.level}`} />
          <span className="legend-text">{item.text}</span>
        </div>
      ))}
      <div className="legend-note">
        數字代表：面試官/應試者/會議室
      </div>
    </div>
  );
};

export default CalendarLegend;