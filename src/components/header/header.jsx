import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../fireBase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { toggleCartDropdownAction } from '../../redux/cart/cart-action';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from '../../redux/user/user-selectors';
import { toggleCartDropdownSelector } from '../../redux/cart/cart-selectors';
import { withRouter } from 'react-router';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.style';


const Header = ({ currentUser, toggleCartDropdown, toggleCartDropdownAction }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo" />
                { currentUser && <div>{ currentUser.displayName }</div> }
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                { currentUser ?
                    (
                        <OptionLink to='/sign-in' onClick={ () => auth.signOut() }>
                            SIGN OUT
                        </OptionLink>
                    )
                    :
                    (
                        <OptionLink to='/sign-in'>
                            SIGN IN
                        </OptionLink>
                    ) }
                <div
                    onClick={ toggleCartDropdownAction }>
                    <CartIcon />
                </div>
                { toggleCartDropdown ? null : <CartDropdown /> }
            </OptionsContainer>
        </HeaderContainer>
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