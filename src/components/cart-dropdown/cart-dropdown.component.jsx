import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { withRouter } from "react-router";
import { toggleCartDropdownAction } from '../../redux/cart/cart-action';
import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { cartItems.length ?
                    cartItems.map((item) => {
                        return <CartItem key={ item.id } item={ item } />
                    }) :
                    <span className="empty-message">Your Cart Is Empty</span>
                }
                <CustomButton
                    onClick={ () => {
                        history.push('/checkout');
                        dispatch(toggleCartDropdownAction());
                    } }>
                    GO TO CHECKOUT
                </CustomButton>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));