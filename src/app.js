import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route,Switch} from 'react-router-dom';
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
    404! <Link to="/edit">Go Home</Link>
    </div>
);
const Header=()=>(
    <header>
        <h1>Expensify</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/help">Help</Link>
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