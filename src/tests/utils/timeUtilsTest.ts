import { formatTimeSlots } from '../../utils/timeUtils';

// 測試函數
function testFormatTimeSlots() {
  console.log('開始測試 formatTimeSlots 函數...');
  
  // 測試案例 1: 測試標準格式時間段
  const test1 = '2025-05-20T14:00:00/2025-05-20T15:00:00';
  console.log('\n測試案例 1: 已經是標準格式的時間段');
  console.log('輸入:', test1);
  console.log('輸出:', formatTimeSlots(test1));
  
  // 測試案例 2: 測試需要拆分的時間段（超過一小時）
  const test2 = '2025-05-20T14:00:00/2025-05-20T16:00:00';
  console.log('\n測試案例 2: 需要拆分的時間段（兩小時）');
  console.log('輸入:', test2);
  console.log('輸出:', formatTimeSlots(test2));
  
  // 測試案例 3: 測試常用格式 "月/日 時:分 - 時:分"
  const test3 = '5/20 14:00 - 15:00';
  console.log('\n測試案例 3: 常用格式 "月/日 時:分 - 時:分"');
  console.log('輸入:', test3);
  console.log('輸出:', formatTimeSlots(test3));
  
  // 測試案例 4: 使用不同的分隔符號
  const test4 = '5/20 14:00 ~ 15:00';
  console.log('\n測試案例 4: 使用 ~ 分隔時間');
  console.log('輸入:', test4);
  console.log('輸出:', formatTimeSlots(test4));
  
  // 測試案例 5: 多個時間段（用逗號分隔）
  const test5 = '5/20 14:00 - 15:00, 5/20 16:00 - 17:00';
  console.log('\n測試案例 5: 多個時間段（逗號分隔）');
  console.log('輸入:', test5);
  console.log('輸出:', formatTimeSlots(test5));
  
  // 測試案例 6: 含有星期的格式
  const test6 = '5/20 (一) 14:00 - 15:00';
  console.log('\n測試案例 6: 含有星期的格式');
  console.log('輸入:', test6);
  console.log('輸出:', formatTimeSlots(test6));
  
  // 測試案例 7: 空字串
  const test7 = '';
  console.log('\n測試案例 7: 空字串');
  console.log('輸入: (空字串)');
  console.log('輸出:', formatTimeSlots(test7));
  
  // 測試案例 8: 不符合任何已知格式的時間
  const test8 = '明天下午兩點到三點';
  console.log('\n測試案例 8: 不符合已知格式的時間');
  console.log('輸入:', test8);
  console.log('輸出:', formatTimeSlots(test8));

  // 以下是新增的更複雜測試案例
  
  // 測試案例 9: 含有中文星期和波浪號的長時間段
  const test9 = '3/14 (一) 12:00~16:00';
  console.log('\n測試案例 9: 含有中文星期和波浪號的長時間段');
  console.log('輸入:', test9);
  console.log('輸出:', formatTimeSlots(test9));
  
  // 測試案例 10: 含有多餘空格的時間格式
  const test10 = '  3/14   (一)    12:00  ~  16:00  ';
  console.log('\n測試案例 10: 含有多餘空格的時間格式');
  console.log('輸入:', test10);
  console.log('輸出:', formatTimeSlots(test10));
  
  // 測試案例 11: 含有全形符號的時間格式
  const test11 = '3/14 （一） 12:00～16:00';
  console.log('\n測試案例 11: 含有全形符號的時間格式');
  console.log('輸入:', test11);
  console.log('輸出:', formatTimeSlots(test11));
  
  // 測試案例 12: 含有英文星期的時間格式
  const test12 = '3/14 (Mon) 12:00-16:00';
  console.log('\n測試案例 12: 含有英文星期的時間格式');
  console.log('輸入:', test12);
  console.log('輸出:', formatTimeSlots(test12));
  
  // 測試案例 13: 混合全形半形的複雜時間格式
  const test13 = '３/１４　(一)　１２:００～１６:００';
  console.log('\n測試案例 13: 混合全形半形的複雜時間格式');
  console.log('輸入:', test13);
  console.log('輸出:', formatTimeSlots(test13));
  
  // 測試案例 14: 星期在日期後沒有括號
  const test14 = '3/14 一 12:00-16:00';
  console.log('\n測試案例 14: 星期在日期後沒有括號');
  console.log('輸入:', test14);
  console.log('輸出:', formatTimeSlots(test14));
  
  // 測試案例 15: 跨越午夜的時間段
  const test15 = '3/14 22:00-02:00';
  console.log('\n測試案例 15: 跨越午夜的時間段');
  console.log('輸入:', test15);
  console.log('輸出:', formatTimeSlots(test15));
  
  // 測試案例 16: 非常複雜的混合案例
  const test16 = '3/14 (一) 12:00~16:00, 3/15（二）　14:30～17:30, 3/16 (Wed) 09:00-12:00';
  console.log('\n測試案例 16: 非常複雜的混合案例');
  console.log('輸入:', test16);
  console.log('輸出:', formatTimeSlots(test16));

  console.log('\n測試完成！');
}

// 執行測試
testFormatTimeSlots();