import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import {setTextFilter} from './actions/filter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
    //console.log(state);
})

//console.log(store.getState());
//store.dispatch(addExpense({description:'rent',amount:100, createdAt:1000}));
store.dispatch(addExpense({description:'rent',amount:100, createdAt:1000}));
store.dispatch(addExpense({description:'water',amount:55, createdAt:3000}));
store.dispatch(addExpense({description:'gas',amount:150, createdAt:2500}));
store.dispatch(setTextFilter('gas'));

setTimeout(()=>{
    store.dispatch(setTextFilter('water'));
},3000);


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));