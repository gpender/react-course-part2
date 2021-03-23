import { createStore, combineReducers} from 'redux';

// ADD EXPENSE
// REMOVE
// EDIT
// SET FILTER

// Expesnses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
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

console.log(store.getState());

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