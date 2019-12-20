import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../database/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { toggleCartDropdownAction } from '../../redux/cart/cart-action';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from '../../redux/user/user-selectors';
import { toggleCartDropdownSelector } from '../../redux/cart/cart-selectors';
import { withRouter } from 'react-router';
import './header.style.scss';


const Header = ({ currentUser, toggleCartDropdown, toggleCartDropdownAction }) => {
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
                    onClick={ toggleCartDropdownAction }>
                    <CartIcon />
                </div>
            </div>
            { toggleCartDropdown ? null : <CartDropdown /> }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    toggleCartDropdown: toggleCartDropdownSelector
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdownAction: () => dispatch(toggleCartDropdownAction())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));