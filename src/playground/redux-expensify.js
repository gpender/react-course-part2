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
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);
store.subscribe(()=>{
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description:'rent',amount:100}));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:10}));
//console.log(expenseTwo.expense.id);

//store.dispatch(removeExpense({id:expenseOne.expense.id}));

//store.dispatch(editExpense({id:expenseTwo.expense.id,updates:{amount:999,description:'coffeeeeeeee'}}));

//store.dispatch(setTextFilter({filter:{text:'amount',startDate:'7777'}}));
store.dispatch(setTextFilter({text:'gfdjhgkjhdf'}));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());




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