import React from 'react';
import CheckoutHeader from '../../components/cart-checkout-header/cart-checkout-header.component';
import CheckoutItems from '../../components/cart-checkout/cart-checkout.component';
import './checkout-page.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cart-selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


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
            <StripeCheckoutButton price={ cartItemsTotal } />
            <div className="test-warning">
                * Please use the following test credit card for payments*
                4242 4242 4242 4242 - Exp: 01/20 - cvv: 123
            </div>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);