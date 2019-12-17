import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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
                    <Route exact path='/sign-in' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />) } />
                    <Route path='/shop' component={ ShopPage } />
                </Switch>
            </div>
        );
    }
};

const mapsStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(mapsStateToProps)(AppRouter);
