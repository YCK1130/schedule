import FileSaver from 'file-saver';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import type { Interviewee, Interviewer } from '../../types';

export interface DataGeneratorConfig {
  startDate?: Date;
  endDate?: Date;
  dailyTimeRange?: {
    start: number;  // 0-23
    end: number;    // 0-23
  };
  interviewDuration?: number;  // minutes
  specializations?: string[];
  positions?: string[];
  namePrefix?: {
    interviewer: string;
    interviewee: string;
  };
  emailDomain?: string;
  availabilityDistribution?: {
    interviewer: number;  // 0-1, percentage of available slots
    interviewee: number;  // 0-1, percentage of available slots
  };
}

const defaultConfig: DataGeneratorConfig = {
  startDate: new Date('2025-05-20T00:00:00'),
  endDate: new Date('2025-05-24T00:00:00'),
  dailyTimeRange: {
    start: 9,
    end: 17
  },
  interviewDuration: 60,
  specializations: ['前端', '後端', '全端', 'DevOps', '資安', 'AI/ML', '管理職'],
  positions: ['前端工程師', '後端工程師', '全端工程師', 'DevOps 工程師', '資安工程師', 'AI/ML 工程師'],
  namePrefix: {
    interviewer: '面試官',
    interviewee: '應試者'
  },
  emailDomain: 'example.com',
  availabilityDistribution: {
    interviewer: 0.7,
    interviewee: 0.5
  }
};

export class DataGenerator {
  private config: DataGeneratorConfig;

  constructor(config: Partial<DataGeneratorConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  private generateTimeSlots(): string[] {
    const timeSlots: string[] = [];
    const currentDate = new Date(this.config.startDate!);
    const endDate = new Date(this.config.endDate!);
    
    while (currentDate < endDate) {
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        for (let hour = this.config.dailyTimeRange!.start; hour < this.config.dailyTimeRange!.end; hour++) {
          const startTime = new Date(currentDate);
          startTime.setHours(hour, 0, 0);
          
          const endTime = new Date(startTime);
          endTime.setMinutes(endTime.getMinutes() + this.config.interviewDuration!);
          
          if (endTime.getHours() <= this.config.dailyTimeRange!.end) {
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

  private generateInterviewers(count: number): Interviewer[] {
    const timeSlots = this.generateTimeSlots();
    
    return Array.from({ length: count }, (_, i) => ({
      id: `interviewer-${i + 1}`,
      name: `${this.config.namePrefix!.interviewer} ${i + 1}`,
      email: `interviewer${i + 1}@${this.config.emailDomain}`,
      specialization: this.config.specializations![i % this.config.specializations!.length],
      availability: timeSlots
        .filter(() => Math.random() < this.config.availabilityDistribution!.interviewer)
        .join(',')
    }));
  }

  private generateInterviewees(count: number): Interviewee[] {
    const timeSlots = this.generateTimeSlots();
    
    return Array.from({ length: count }, (_, i) => ({
      id: `interviewee-${i + 1}`,
      name: `${this.config.namePrefix!.interviewee} ${i + 1}`,
      email: `interviewee${i + 1}@${this.config.emailDomain}`,
      positionApplied: this.config.positions![i % this.config.positions!.length],
      availability: timeSlots
        .filter(() => Math.random() < this.config.availabilityDistribution!.interviewee)
        .join(',')
    }));
  }

  public generateData(options: {
    type: 'interviewers' | 'interviewees';
    count: number;
  }) {
    return options.type === 'interviewers' 
      ? this.generateInterviewers(options.count)
      : this.generateInterviewees(options.count);
  }

  public generateAndExport(options: {
    format: 'csv' | 'xlsx' | 'json';
    type: 'interviewers' | 'interviewees';
    count: number;
    filename?: string;
  }) {
    const data = this.generateData(options);
    const filename = options.filename || `${options.type}_${new Date().getTime()}`;

    switch (options.format) {
      case 'csv': {
        const csv = Papa.unparse(data);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        FileSaver.saveAs(blob, `${filename}.csv`);
        break;
      }
      case 'xlsx': {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, options.type);
        XLSX.writeFile(wb, `${filename}.xlsx`);
        break;
      }
      case 'json': {
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
        FileSaver.saveAs(blob, `${filename}.json`);
        break;
      }
    }

    return data;
  }
}