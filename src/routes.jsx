import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/home/home-page';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout-page';

class AppRouter extends Component {
    render() {
        const { currentUser } = this.props
        return (
            < div >
                <Header currentUser={ currentUser } />
                <Switch>
                    <Route exact path='/' component={ HomePage } />
                    <Route exact path='/sign-in' render={ () => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />) } />
                    <Route path='/shop' component={ ShopPage } />
                    <Route exact path='/checkout' component={ CheckoutPage } />
                </Switch>
            </div >
        );
    }
};

const mapsStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(mapsStateToProps)(AppRouter);
