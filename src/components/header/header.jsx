import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../database/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { toggleCartDropdown } from '../../redux/cart/cart-action';
import './header.style.scss';


const Header = ({ currentUser, toggle, toggleCartDropdown }) => {
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
                <div
                    onClick={ toggleCartDropdown }>
                    <CartIcon />
                </div>
            </div>
            { toggle ? null : <CartDropdown /> }
        </div>
    );
};

const mapStateToProps = ({ user: { currentUser }, cart: { toggle } }) => ({
    currentUser,
    toggle
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);