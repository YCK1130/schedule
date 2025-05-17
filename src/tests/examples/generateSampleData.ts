import { DataGenerator } from '../utils/dataExportGenerator';

// 基本使用範例
const generator = new DataGenerator();

// 使用預設配置生成資料
generator.generateAndExport({
  format: 'csv',
  type: 'interviewers',
  count: 5,
  filename: 'default_interviewers'
});

// 自定義配置範例
const customGenerator = new DataGenerator({
  // 自定義日期範圍
  startDate: new Date('2025-06-01T00:00:00'),
  endDate: new Date('2025-06-07T00:00:00'),
  
  // 自定義工作時間
  dailyTimeRange: {
    start: 10,  // 早上 10 點開始
    end: 18     // 下午 6 點結束
  },
  
  // 自定義面試時長
  interviewDuration: 45,  // 45 分鐘
  
  // 自定義職位和專長
  specializations: ['Java', 'Python', 'React', 'Node.js', 'AWS'],
  positions: ['軟體工程師', '系統架構師', '資料工程師', '前端開發師'],
  
  // 自定義命名
  namePrefix: {
    interviewer: 'INT',  // INT-1, INT-2, ...
    interviewee: 'CAN'   // CAN-1, CAN-2, ...
  },
  
  // 自定義電子郵件網域
  emailDomain: 'company.com',
  
  // 自定義時段可用性分配
  availabilityDistribution: {
    interviewer: 0.8,  // 面試官有 80% 的時段可用
    interviewee: 0.6   // 應試者有 60% 的時段可用
  }
});

// 生成多種格式的檔案
customGenerator.generateAndExport({
  format: 'csv',
  type: 'interviewers',
  count: 3,
  filename: 'custom_interviewers'
});

customGenerator.generateAndExport({
  format: 'xlsx',
  type: 'interviewees',
  count: 10,
  filename: 'custom_interviewees'
});

// 生成特定情境的資料
const busyScheduleGenerator = new DataGenerator({
  availabilityDistribution: {
    interviewer: 0.3,  // 面試官只有 30% 的時段可用
    interviewee: 0.2   // 應試者只有 20% 的時段可用
  }
});

busyScheduleGenerator.generateAndExport({
  format: 'json',
  type: 'interviewers',
  count: 4,
  filename: 'busy_schedule_interviewers'
});

// 生成週末面試資料
const weekendGenerator = new DataGenerator({
  startDate: new Date('2025-05-24T00:00:00'),  // 週六
  endDate: new Date('2025-05-25T00:00:00'),    // 週日
  dailyTimeRange: {
    start: 10,
    end: 16
  }
});

weekendGenerator.generateAndExport({
  format: 'csv',
  type: 'interviewees',
  count: 5,
  filename: 'weekend_interviewees'
});