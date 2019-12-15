import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../database/firebase.utils';
import './header.style.scss';


const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <NavLink className="logo-container" to='/'>
                <Logo className="logo" />
                { currentUser && <div>{ currentUser.displayName }</div> }
            </NavLink>
            <div className="options">
                <NavLink className="option" to='/shop'>SHOP</NavLink>
                <NavLink className="option" to='/contact'>CONTACT</NavLink>
                { currentUser ? (
                    <Link to='/sign-in' className='option' onClick={ () => auth.signOut() }>
                        SIGN OUT
                    </Link>
                ) : (
                        <Link className='option' to='/sign-in'>
                            SIGN IN
                    </Link>
                    ) }
            </div>
        </div>
    );
};

export default Header;