import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_4YXAgJBqncR4Ps29wY9NNmz800PzSfW0Uz'

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <div>
            <StripeCheckout
                label='Pay Now'
                name='E-commerce Ltd.'
                billingAddress
                shippingAddress
                image='https://sendeyo.com/up/d/f3eb2117da'
                description={ `Your total is $${price}` }
                amount={ priceForStripe }
                panelLabel='Pay Now'
                token={ onToken }
                stripeKey={ publishablekey }
            />
        </div>
    );
};

export default StripeCheckoutButton;