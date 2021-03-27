import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD EXPENSE
const addExpense = (
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    } = {}
    )=>({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// REMOVE
const removeExpense = ({id})=>({
    type:'REMOVE_EXPENSE',
    id
});
// EDIT
const editExpense = ({id,updates}) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});
// SET FILTER
const setTextFilter = ({text=''}={}) =>({
    type:'SET_TEXT_FILTER',
    text
})
const sortByAmount = ()=>({
    type:'SORT_BY_AMOUNT'
});
const sortByDate = ()=>({
    type:'SORT_BY_DATE'
});

const setStartDate = (startDate)=>({
    type:'SET_START_DATE',
    startDate
})
const setEndDate = (endDate)=>({
    type:'SET_END_DATE',
    endDate
})


// Expesnses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
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
const filtersDefaultState = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
};

const filtersReducer = (state=filtersDefaultState, action) =>{
    switch(action.type){
        case 'SORT_BY_AMOUNT':
            return{
                ...state,sortBy:'amount'
            }        
        case 'SORT_BY_DATE':
            return{
                ...state,sortBy:'date'
            }
        case 'SET_TEXT_FILTER':
            return {...state, text:action.text}
        case 'SET_START_DATE':
            return {...state, startDate:action.startDate}
        case 'SET_END_DATE':
            return {...state, endDate:action.endDate}
        default:
            return state;
    }
};

// timestamps(milliseconds)
// January 1st 1970 (Unix epoch)
// 33400,10,-203

// Get visible xpenses
const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate})=>{
    
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.endDate <= endDate;
        const textMatch = expense.description === undefined || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    });
}


const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description:'rent',amount:100, createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:10, createdAt:-1000}));
//console.log(expenseTwo.expense.id);

//store.dispatch(removeExpense({id:expenseOne.expense.id}));

//store.dispatch(editExpense({id:expenseTwo.expense.id,updates:{amount:999,description:'coffeeeeeeee'}}));

store.dispatch(setTextFilter({text:undefined}));
// store.dispatch(setTextFilter({text:'gfdjhgkjhdf'}));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


//store.dispatch(setStartDate(9125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

const demoState = {
    expenses:[{
        id:'fegregegf',
        description:'January Rent',
        note:'A commment about this expense',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',//date or amount
        startDate:undefined,
        endDate:undefined
    }
}


//  SPREAD OPERATOR ON OBJECTS

// const user = {
//     name:'jen',
//     age:24
// };

// console.log({
//     'title':'mrs',...user,'sex':'female'
// })
// const guy = {...user,'title':'mrs'}

// console.log(guy);