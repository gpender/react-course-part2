import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage =()=>(
    <div>This is the Dashboard Component</div>
);
const AddExpensePage =()=>(
    <div>This is Add page</div>
);
const EditExpensePage= () => (
    <p>Edit</p>
);
const HelpPage = () => (
    <p>Help</p>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes,document.getElementById('app'));