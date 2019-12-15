import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home-page';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

class AppRouter extends Component {
    render() {
        return (
            <div>
                <Header currentUser={ this.props.currentUser } />
                <Switch>
                    <Route exact path='/' component={ HomePage } />
                    <Route exact path='/sign-in' component={ SignInAndSignUp } />
                    <Route path='/shop' component={ ShopPage } />
                </Switch>
            </div>
        );
    }
};

export default AppRouter;
