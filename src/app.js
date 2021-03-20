import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
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
const NotFoundPage = () => (
    <p>404!</p>
);
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(routes,document.getElementById('app'));