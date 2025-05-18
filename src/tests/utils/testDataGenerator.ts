import type { Interviewee, Interviewer } from '../../types';

interface GeneratorOptions {
  startDate?: Date;
  endDate?: Date;
  dailyTimeRange?: {
    start: number;  // 小時 (0-23)
    end: number;    // 小時 (0-23)
  };
  interviewDuration?: number;  // 分鐘
}

const defaultOptions: GeneratorOptions = {
  startDate: new Date('2025-05-20T00:00:00'),
  endDate: new Date('2025-05-24T00:00:00'),
  dailyTimeRange: {
    start: 9,
    end: 17
  },
  interviewDuration: 60
};

export function generateTimeSlots(options: GeneratorOptions = {}): string[] {
  const opts = { ...defaultOptions, ...options };
  const timeSlots: string[] = [];
  const currentDate = new Date(opts.startDate!);
  const endDate = new Date(opts.endDate!);
  
  while (currentDate < endDate) {
    // 只生成週一到週五的時段
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      for (let hour = opts.dailyTimeRange!.start; hour < opts.dailyTimeRange!.end; hour++) {
        const startTime = new Date(currentDate);
        startTime.setHours(hour, 0, 0);
        
        const endTime = new Date(startTime);
        endTime.setMinutes(endTime.getMinutes() + opts.interviewDuration!);
        
        if (endTime.getHours() <= opts.dailyTimeRange!.end) {
          timeSlots.push(
            `${startTime.toISOString().slice(0, 19)}/${endTime.toISOString().slice(0, 19)}`
          );
        }
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return timeSlots;
}

export function generateInterviewers(count: number, options: GeneratorOptions = {}): Interviewer[] {
  const specializations = ['前端', '後端', '全端', 'DevOps', '資安', 'AI/ML', '管理職'];
  const timeSlots = generateTimeSlots(options);
  
  return Array.from({ length: count }, (_, i) => ({
    id: `interviewer-${i + 1}`,
    name: `面試官 ${i + 1}`,
    email: `interviewer${i + 1}@example.com`,
    specialization: specializations[i % specializations.length],
    availability: timeSlots.filter(() => Math.random() > 0.3) // 隨機選擇 70% 的時段作為可用時段
  }));
}

export function generateInterviewees(count: number, options: GeneratorOptions = {}): Interviewee[] {
  const positions = ['前端工程師', '後端工程師', '全端工程師', 'DevOps 工程師', '資安工程師', 'AI/ML 工程師'];
  const timeSlots = generateTimeSlots(options);
  
  return Array.from({ length: count }, (_, i) => ({
    id: `interviewee-${i + 1}`,
    name: `應試者 ${i + 1}`,
    email: `interviewee${i + 1}@example.com`,
    positionApplied: positions[i % positions.length],
    availability: timeSlots.filter(() => Math.random() > 0.5) // 隨機選擇 50% 的時段作為可用時段
  }));
}

export function generateTestScenarios() {
  return {
    // 基本場景：足夠的面試官和應試者
    basicScenario: {
      interviewers: generateInterviewers(5),
      interviewees: generateInterviewees(3)
    },
    
    // 面試官不足場景
    insufficientInterviewers: {
      interviewers: generateInterviewers(2),
      interviewees: generateInterviewees(5)
    },
    
    // 時段衝突場景：所有人都在相同時段可用
    timeConflictScenario: {
      interviewers: generateInterviewers(3, {
        startDate: new Date('2025-05-20T09:00:00'),
        endDate: new Date('2025-05-20T10:00:00'),
        dailyTimeRange: { start: 9, end: 10 }
      }),
      interviewees: generateInterviewees(5, {
        startDate: new Date('2025-05-20T09:00:00'),
        endDate: new Date('2025-05-20T10:00:00'),
        dailyTimeRange: { start: 9, end: 10 }
      })
    },
    
    // 時段分散場景：每個人在不同時段可用
    scatteredAvailability: {
      interviewers: generateInterviewers(3).map((interviewer, i) => ({
        ...interviewer,
        availability: generateTimeSlots({
          startDate: new Date(`2025-05-2${i}T09:00:00`),
          endDate: new Date(`2025-05-2${i}T17:00:00`)
        })
      })),
      interviewees: generateInterviewees(3).map((interviewee, i) => ({
        ...interviewee,
        availability: generateTimeSlots({
          startDate: new Date(`2025-05-2${i}T09:00:00`),
          endDate: new Date(`2025-05-2${i}T17:00:00`)
        })
      }))
    }
  };
}