import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../database/firebase.utils';
import './header.style.scss';


const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <NavLink className="logo-container" to='/'>
                <Logo className="logo" />
                { currentUser && <div>{ currentUser.displayName.toUpperCase() }</div> }
            </NavLink>
            <div className="options">
                <NavLink className="option" to='/shop'>SHOP</NavLink>
                <NavLink className="option" to='/contact'>CONTACT</NavLink>
                { currentUser ?
                    <NavLink
                        to='/sign-in'
                        onClick={ () => auth.signOut() }
                        className="option">SIGN OUT
                    </NavLink> :
                    <NavLink className="option" to='/sign-in'>
                        SIGN IN
                        </NavLink> }
            </div>
        </div>
    );
};

export default Header;