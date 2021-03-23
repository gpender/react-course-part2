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
const removeExpense = ({id})=>({
    type:'REMOVE_EXPENSE',
    id
})
// REMOVE
// EDIT
// SET FILTER

// Expesnses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense];// state.concat(action.expense);
            break;
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>{
                return expense.id !== action.id;
            })
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
console.log(expenseOne.expense.id);

store.dispatch(removeExpense({id:expenseOne.expense.id}));

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