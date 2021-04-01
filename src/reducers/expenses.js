// Expesnses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
            break;
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>{
                return expense.id !== action.id;
            });
        case 'EDIT_EXPENSE':
            console.log(action.id);
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};
