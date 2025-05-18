import type { ComparisonOperator } from '../contexts/SchedulingContext';
import { scheduleInterviews } from '../utils/schedulerUtils';
import { generateTestScenarios } from './utils/testDataGenerator';

function runTests() {
  const scenarios = generateTestScenarios();
  const tests = [
    {
      name: '基本配對測試',
      scenario: scenarios.basicScenario,
      restrictions: {
        interviewers: { operator: '=' as ComparisonOperator, count: 2, groupName: 'Interviewers' },
        interviewees: { operator: '=' as ComparisonOperator, count: 1, groupName: 'Interviewees' }
      }
    },
    {
      name: '面試官不足測試',
      scenario: scenarios.insufficientInterviewers,
      restrictions: {
        interviewers: { operator: '>=' as ComparisonOperator, count: 3, groupName: 'Interviewers' },
        interviewees: { operator: '=' as ComparisonOperator, count: 1, groupName: 'Interviewees' }
      }
    },
    {
      name: '時段衝突測試',
      scenario: scenarios.timeConflictScenario,
      restrictions: {
        interviewers: { operator: '=' as ComparisonOperator, count: 2, groupName: 'Interviewers' },
        interviewees: { operator: '=' as ComparisonOperator, count: 1, groupName: 'Interviewees' }
      }
    },
    {
      name: '時段分散測試',
      scenario: scenarios.scatteredAvailability,
      restrictions: {
        interviewers: { operator: '>=' as ComparisonOperator, count: 1, groupName: 'Interviewers' },
        interviewees: { operator: '=' as ComparisonOperator, count: 1, groupName: 'Interviewees' }
      }
    }
  ];

  console.log('開始執行測試...\n');

  tests.forEach(test => {
    console.log(`=== ${test.name} ===`);
    console.log('測試條件：', {
      面試官數量: test.scenario.interviewers.length,
      應試者數量: test.scenario.interviewees.length,
      限制條件: test.restrictions
    });

    const result = scheduleInterviews(
      test.scenario.interviewers,
      test.scenario.interviewees,
      test.restrictions
    );

    console.log('測試結果：', {
      成功配對數量: result.interviews.length,
      未配對面試官數量: result.unmatched.interviewers.length,
      未配對應試者數量: result.unmatched.interviewees.length
    });

    if (result.unmatched.reasons.length > 0) {
      console.log('未配對原因：');
      result.unmatched.reasons.forEach(reason => console.log(`- ${reason}`));
    }

    console.log('\n配對結果：');
    result.interviews.forEach((interview, index) => {
      console.log(`面試 #${index + 1}：`);
      console.log(`- 時間：${new Date(interview.startTime).toLocaleString()} - ${new Date(interview.endTime).toLocaleString()}`);
      console.log(`- 面試官：${interview.interviewerNames.join(', ')}`);
      console.log(`- 應試者：${interview.intervieweeNames.join(', ')}\n`);
    });

    console.log('----------------------------------------\n');
  });
}

// 執行測試
runTests();