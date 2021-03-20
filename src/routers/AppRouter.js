import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import ContactPage from '../components/ContactPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import Header from '../components/Header';




const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header/>
        <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/portfolio" component={PortfolioPage} exact={true}/>
        <Route path="/portfolio/:id" component={PortfolioItemPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route component={NotFoundPage} />             
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;