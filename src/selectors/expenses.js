// timestamps(milliseconds)
// January 1st 1970 (Unix epoch)
// 33400,10,-203

// Get visible xpenses
export default (expenses, {text,sortBy,startDate,endDate})=>{
    
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.endDate <= endDate;
        const textMatch = expense.description === undefined || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy ==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};