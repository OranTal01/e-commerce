import React from 'react';
import CheckoutHeader from '../../components/cart-checkout-header/cart-checkout-header.component';
import CheckoutItems from '../../components/cart-checkout/cart-checkout.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartItemsTotalSelector, cartItemsSelector } from '../../redux/cart/cart-selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { TotalContainer, WarningContainer, CheckoutPageContainer } from './checkout-page.style';


const CheckoutPage = ({ cartItems, cartItemsTotal }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeader />
            { cartItems.map((cartItem) =>
                <CheckoutItems
                    key={ cartItem.id }
                    cartItem={ cartItem } />) }
            <TotalContainer>
                { `total: ${cartItemsTotal}` }
            </TotalContainer>
            <StripeCheckoutButton price={ cartItemsTotal } />
            <WarningContainer>
                * Please use the following test credit card for payments*
                4242 4242 4242 4242 - Exp: 01/20 - cvv: 123
            </WarningContainer>
        </CheckoutPageContainer>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    cartItemsTotal: cartItemsTotalSelector
});

export default connect(mapStateToProps)(CheckoutPage);