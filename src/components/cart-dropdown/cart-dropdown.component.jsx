import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { cartItemsSelector } from '../../redux/cart/cart-selectors';
import { withRouter } from "react-router";
import { toggleCartDropdownAction } from '../../redux/cart/cart-action';
import { CartDropDownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.style';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        (
                            cartItems.map((item) => {
                                return <CartItem key={ item.id } item={ item } />
                            })
                        )
                        :
                        (
                            <EmptyMessage>
                                Your Cart Is Empty
                            </EmptyMessage>
                        )
                }
                <CustomButton
                    onClick={ () => {
                        history.push('/checkout');
                        dispatch(toggleCartDropdownAction());
                    } }>
                    GO TO CHECKOUT
                </CustomButton>
            </CartItemsContainer>
        </CartDropDownContainer>
    );
};

const mapStateToProps = (state) => ({
    cartItems: cartItemsSelector(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));