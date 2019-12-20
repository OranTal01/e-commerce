import React from 'react';
import CheckoutHeader from '../../components/cart-checkout-header/cart-checkout-header.component';
import CheckoutItems from '../../components/cart-checkout/cart-checkout.component';
import './checkout-page.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cart-selectors';

const CheckoutPage = ({ cartItems, cartItemsTotal }) => {
    return (
        <div className="checkout-page">
            <CheckoutHeader />
            { cartItems.map((cartItem) =>
                <CheckoutItems
                    key={ cartItem.id }
                    cartItem={ cartItem } />) }
            <div className="total">
                { `total: ${cartItemsTotal}` }
            </div>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);