export const getDates = (startDate: Date, num: number) => {
    const dates = [];
    for (let i = 0; i < num; i++) {
        const date = new Date();
        date.setDate(startDate.getDate() + i);
        dates.push(date);
    }
    return dates;
};

export const getInterviewColor = (index: number): string => {
    const colors = ["#4299e1", "#48bb78", "#ed8936", "#667eea", "#ed64a6", "#48bb78", "#4299e1", "#9f7aea"];
    return colors[index % colors.length];
};
