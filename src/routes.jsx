import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home-page';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

const AppRouter = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/sign-in' component={ SignInAndSignUp } />
                <Route exact path='/' component={ HomePage } />
                <Route path='/shop' component={ ShopPage } />
            </Switch>
        </div>
    );
};

export default AppRouter;
