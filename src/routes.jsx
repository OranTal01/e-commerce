import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home-page';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './database/firebase.utils';

class AppRouter extends Component {

    state = {
        currentUser: null
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
            this.setState(() => ({ currentUser: user })))
    };

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={ this.state.currentUser } />
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
