import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.style.scss';

const CartDropdown = ({ items }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { items.map((item) => {
                    return <CartItem key={ item.id } item={ item } />
                }) }
                <CustomButton>
                    GO TO CHECKOUT
                </CustomButton>
            </div>
        </div>
    );
};

const mapStateToProps = ({ cart: { items } }) => ({
    items
});

export default connect(mapStateToProps)(CartDropdown);