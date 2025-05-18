import * as glpk from 'glpk-ts';
import type { GroupRestriction } from '../../contexts/SchedulingContext';
import type { Interviewee, Interviewer, ScheduledInterview } from '../../types';
import {
  getAllTimeSlots,
  isTimeSlotAvailable,
  parseTimeSlot
} from '../schedulerUtils';

// Define types
interface ScheduleResult {
  interviews: ScheduledInterview[];
  unmatched: {
    interviewers: Interviewer[];
    interviewees: Interviewee[];
    reasons: string[];
  };
}

// 使用真正的 GLPK 整數線性規劃解決面試排程問題
export function scheduleInterviewsILP(
  interviewers: Interviewer[],
  interviewees: Interviewee[],
  groupRestrictions: {
    [key: string]: GroupRestriction[];
  }
): ScheduleResult {
  console.log("進入整數線性規劃排程函數", {
    面試官人數: interviewers.length,
    應試者人數: interviewees.length,
    群組限制: groupRestrictions,
  });

  const interviews: ScheduledInterview[] = [];
  const unmatched = {
    interviewers: [] as Interviewer[],
    interviewees: [] as Interviewee[],
    reasons: [] as string[],
  };

  try {
    // 先確保所有時間段格式正確
    const validInterviewers = interviewers.filter((interviewer) => interviewer.availability && interviewer.availability.length > 0);
    const validInterviewees = interviewees.filter((interviewee) => interviewee.availability && interviewee.availability.length > 0);

    // 如果沒有有效的面試官或應試者，直接返回
    if (validInterviewers.length === 0 || validInterviewees.length === 0) {
      console.log("沒有有效的面試官或應試者");
      // 將所有無效的面試官和應試者標記為未匹配
      interviewers
        .filter((i) => !i.availability || i.availability.length === 0)
        .forEach((i) => {
          unmatched.interviewers.push(i);
          unmatched.reasons.push(`面試官 ${i.name} 沒有可用時段`);
        });
      interviewees
        .filter((i) => !i.availability || i.availability.length === 0)
        .forEach((i) => {
          unmatched.interviewees.push(i);
          unmatched.reasons.push(`應試者 ${i.name} 沒有可用時段`);
        });
      return { interviews, unmatched };
    }

    // 收集所有可能的時間段
    const allTimeSlots = getAllTimeSlots(validInterviewers, validInterviewees);
    console.log(`共有 ${allTimeSlots.length} 個可能的時間段`);

    // 按時間順序排序時間段
    allTimeSlots.sort((a, b) => {
      const timeA = parseTimeSlot(a).start;
      const timeB = parseTimeSlot(b).start;
      return timeA.getTime() - timeB.getTime();
    });

    // 使用 GLPK.js 進行全域整數線性規劃求解
    // 由於 glpk-ts 的 API 是異步的，我們需要使用立即執行的異步函數
    (async () => {
      try {
        // 等待模塊加載完成
        await glpk.loadModule();
        
        const scheduledSessions = await solveWithGlpkModel(
          validInterviewers,
          validInterviewees,
          {
            interviewerConstraints: groupRestrictions.interviewers,
            intervieweeConstraints: groupRestrictions.interviewees
          },
          allTimeSlots
        );
        
        // 將結果轉換為標準的 ScheduledInterview 格式
        scheduledSessions.forEach(session => {
          const [startTime, endTime] = session.timeSlot.split("/");
          const interview: ScheduledInterview = {
            interviewerIds: session.interviewers.map(i => i.id),
            interviewerNames: session.interviewers.map(i => i.name),
            intervieweeIds: session.interviewees.map(i => i.id),
            intervieweeNames: session.interviewees.map(i => i.name),
            startTime,
            endTime: endTime || new Date(new Date(startTime).getTime() + 60 * 60 * 1000).toISOString(),
          };
          interviews.push(interview);
        });
        
        // 標記所有未分配的應試者
        const assignedIntervieweeIds = new Set(interviews.flatMap(i => i.intervieweeIds));
        const unmatchedInterviewees = validInterviewees.filter(interviewee => !assignedIntervieweeIds.has(interviewee.id));
        
        unmatchedInterviewees.forEach(interviewee => {
          unmatched.interviewees.push(interviewee);
          unmatched.reasons.push(`無法為應試者 ${interviewee.name} 找到符合限制條件的時段`);
        });
        
        // 標記所有未分配的面試官
        const assignedInterviewerIds = new Set(interviews.flatMap(i => i.interviewerIds));
        const unmatchedInterviewers = validInterviewers.filter(interviewer => !assignedInterviewerIds.has(interviewer.id));
        
        unmatchedInterviewers.forEach(interviewer => {
          unmatched.interviewers.push(interviewer);
          unmatched.reasons.push(`面試官 ${interviewer.name} 未被安排任何面試`);
        });
        
        console.log("整數線性規劃排程完成", {
          成功安排: interviews.length,
          未配對面試官: unmatched.interviewers.length,
          未配對應試者: unmatched.interviewees.length,
        });
      } catch (error) {
        console.error("排程過程中發生錯誤:", error);
      }
    })();
    
    // 由於我們是使用同步函數返回結果，所以這裡先返回一個空的結果
    // 實際上 solveWithGlpkModel 的結果會在異步完成後更新到這個結果中
    return { interviews, unmatched };
    
  } catch (error) {
    console.error("排程過程中發生錯誤:", error);
    return {
      interviews: [],
      unmatched: {
        interviewers,
        interviewees,
        reasons: ["排程過程中發生錯誤"],
      },
    };
  }
}

// 使用 GLPK 求解的結果結構
interface GLPKScheduleResult {
  timeSlot: string;
  interviewers: Interviewer[];
  interviewees: Interviewee[];
}

// 使用 glpk-ts 的 Model API 進行全域整數線性規劃求解 (一次求解全部)
async function solveWithGlpkModel(
  interviewers: Interviewer[],
  interviewees: Interviewee[],
  constraints: {
    interviewerConstraints: GroupRestriction[];
    intervieweeConstraints: GroupRestriction[];
  },
  timeSlots: string[]
): Promise<GLPKScheduleResult[]> {
  try {
    // 建立面試官和應試者的可用性矩陣
    const interviewerAvailability: boolean[][] = Array(interviewers.length)
      .fill(null)
      .map(() => Array(timeSlots.length).fill(false));
    
    const intervieweeAvailability: boolean[][] = Array(interviewees.length)
      .fill(null)
      .map(() => Array(timeSlots.length).fill(false));
    
    // 填充可用性矩陣
    interviewers.forEach((interviewer, i) => {
      timeSlots.forEach((timeSlot, t) => {
        interviewerAvailability[i][t] = isTimeSlotAvailable(interviewer, timeSlot, []);
      });
    });
    
    interviewees.forEach((interviewee, i) => {
      timeSlots.forEach((timeSlot, t) => {
        intervieweeAvailability[i][t] = isTimeSlotAvailable(interviewee, timeSlot, []);
      });
    });
    
    // 按職位分組
    const interviewersByPosition: { [key: string]: number[] } = { '所有': [] };
    interviewers.forEach((interviewer, index) => {
      interviewersByPosition['所有'].push(index);
      
      const position = interviewer.specialization || '未指定';
      if (!interviewersByPosition[position]) {
        interviewersByPosition[position] = [];
      }
      interviewersByPosition[position].push(index);
    });
    
    const intervieweesByPosition: { [key: string]: number[] } = { '所有': [] };
    interviewees.forEach((interviewee, index) => {
      intervieweesByPosition['所有'].push(index);
      
      const position = interviewee.position || '未指定';
      if (!intervieweesByPosition[position]) {
        intervieweesByPosition[position] = [];
      }
      intervieweesByPosition[position].push(index);
    });
    
    // 使用 glpk-ts 的 Model API 建立模型
    const model = new glpk.Model();
    
    // 決策變數 x[i][j][t] 表示面試官i在時間t是否與應試者j匹配
    // 儲存所有變數的參照
    const decisionVars: { [key: string]: { var: glpk.Variable, i: number, j: number, t: number } } = {};
    
    // 添加決策變數
    for (let t = 0; t < timeSlots.length; t++) {
      for (let i = 0; i < interviewers.length; i++) {
        for (let j = 0; j < interviewees.length; j++) {
          // 只有當面試官和應試者都可用時才建立決策變量
          if (interviewerAvailability[i][t] && intervieweeAvailability[j][t]) {
            const v = model.addVar({
              name: `x_${i}_${j}_${t}`,
              lb: 0.0,
              ub: 1.0,
              obj: 1.0,  // 目標函數係數為1，最大化匹配數量
              type: "integer" // 二進制變數 (0-1 整數)
            });
            decisionVars[`x_${i}_${j}_${t}`] = { var: v, i, j, t };
          }
        }
      }
    }
    
    // 約束條件1：每個面試官在每個時間段最多參與一次面試
    for (let t = 0; t < timeSlots.length; t++) {
      for (let i = 0; i < interviewers.length; i++) {
        const vars: [glpk.Variable, number][] = [];
        for (let j = 0; j < interviewees.length; j++) {
          const key = `x_${i}_${j}_${t}`;
          if (decisionVars[key]) {
            vars.push([decisionVars[key].var, 1.0]);
          }
        }
        
        if (vars.length > 0) {
          model.addConstr({
            name: `interviewer_${i}_time_${t}`,
            ub: 1.0,  // 最多參與一次面試
            coeffs: vars
          });
        }
      }
    }
    
    // 約束條件2：每個應試者在每個時間段最多參與一次面試
    for (let t = 0; t < timeSlots.length; t++) {
      for (let j = 0; j < interviewees.length; j++) {
        const vars: [glpk.Variable, number][] = [];
        for (let i = 0; i < interviewers.length; i++) {
          const key = `x_${i}_${j}_${t}`;
          if (decisionVars[key]) {
            vars.push([decisionVars[key].var, 1.0]);
          }
        }
        
        if (vars.length > 0) {
          model.addConstr({
            name: `interviewee_${j}_time_${t}`,
            ub: 1.0,  // 最多參與一次面試
            coeffs: vars
          });
        }
      }
    }
    
    // 約束條件3：每個時間段的職位人數限制
    for (let t = 0; t < timeSlots.length; t++) {
      // 處理面試官職位限制約束
      for (const constraint of constraints.interviewerConstraints) {
        const position = constraint.targetPosition || '所有';
        const positionInterviewers = interviewersByPosition[position] || [];
        
        if (positionInterviewers.length > 0) {
          const vars: [glpk.Variable, number][] = [];
          for (const i of positionInterviewers) {
            for (let j = 0; j < interviewees.length; j++) {
              const key = `x_${i}_${j}_${t}`;
              if (decisionVars[key]) {
                vars.push([decisionVars[key].var, 1.0]);
              }
            }
          }
          
          if (vars.length > 0) {
            // 添加最小數量約束
            model.addConstr({
              name: `interviewer_min_${position}_time_${t}`,
              lb: constraint.minCount || 0,
              coeffs: vars
            });
            
            // 添加最大數量約束
            if (constraint.maxCount) {
              model.addConstr({
                name: `interviewer_max_${position}_time_${t}`,
                ub: constraint.maxCount,
                coeffs: vars
              });
            }
          }
        }
      }
      
      // 處理應試者職位限制約束
      for (const constraint of constraints.intervieweeConstraints) {
        const position = constraint.targetPosition || '所有';
        const positionInterviewees = intervieweesByPosition[position] || [];
        
        if (positionInterviewees.length > 0) {
          const vars: [glpk.Variable, number][] = [];
          for (let i = 0; i < interviewers.length; i++) {
            for (const j of positionInterviewees) {
              const key = `x_${i}_${j}_${t}`;
              if (decisionVars[key]) {
                vars.push([decisionVars[key].var, 1.0]);
              }
            }
          }
          
          if (vars.length > 0) {
            // 添加最小數量約束
            model.addConstr({
              name: `interviewee_min_${position}_time_${t}`,
              lb: constraint.minCount || 0,
              coeffs: vars
            });
            
            // 添加最大數量約束
            if (constraint.maxCount) {
              model.addConstr({
                name: `interviewee_max_${position}_time_${t}`,
                ub: constraint.maxCount,
                coeffs: vars
              });
            }
          }
        }
      }
    }
    
    // 求解整數線性規劃問題
    console.log("開始求解整數線性規劃問題...");
    model.intopt();
    console.log("求解完成");
    
    // 將結果轉換為排程結果
    const scheduleResults: GLPKScheduleResult[] = [];
    
    // 處理每個決策變數
    for (const varName in decisionVars) {
      const { var: v, i, j, t } = decisionVars[varName];
      if (v.value > 0.5) { // 如果變數值為1
        // 查找現有的時間段結果或創建新的
        let timeSlotResult = scheduleResults.find(r => r.timeSlot === timeSlots[t]);
        if (!timeSlotResult) {
          timeSlotResult = {
            timeSlot: timeSlots[t],
            interviewers: [],
            interviewees: []
          };
          scheduleResults.push(timeSlotResult);
        }
        
        // 添加面試官和應試者
        if (!timeSlotResult.interviewers.some(interviewer => interviewer.id === interviewers[i].id)) {
          timeSlotResult.interviewers.push(interviewers[i]);
        }
        
        if (!timeSlotResult.interviewees.some(interviewee => interviewee.id === interviewees[j].id)) {
          timeSlotResult.interviewees.push(interviewees[j]);
        }
      }
    }
    
    return scheduleResults;
  } catch (error) {
    console.error('GLPK 求解過程中發生錯誤:', error);
    return [];
  }
}