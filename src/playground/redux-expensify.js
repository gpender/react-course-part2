import { createStore, combineReducers} from 'redux';

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