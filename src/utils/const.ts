// 申請身份 -> position
// 職位 -> position
// 幹部姓名 -> name
// 申請者姓名 -> name
// 可面試時間 -> availability
export const colMapping = new Map<string, string>([
    ["幹部姓名", "name"],
    ["申請者姓名", "name"],
    ["面試官姓名", "name"],
    ["面試者姓名", "name"],
    ["應試者姓名", "name"],
    ["可面試時間", "availability"],
    ["面試時間", "availability"],
    ["時間", "availability"],
    ["申請身份", "position"],
    ["職位", "position"],
    ["面試者可面試時間", "availability"],
    ["time", "availability"],
    ["specialization", "position"],
    ["positionapplied", "position"],
]);
