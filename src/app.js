import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
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
    <div>
    404! <Link to="/">Go Home</Link>
    </div>
);
const Header=()=>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)
const routes = (
    <BrowserRouter>
        <div>
        <Header></Header>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes,document.getElementById('app'));