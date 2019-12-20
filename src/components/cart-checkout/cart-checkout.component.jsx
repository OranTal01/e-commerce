import React from 'react';
import './cart-checkout.style.scss';

const CheckoutItems = ({ cartItem: { imageUrl, name, quantity, price } }) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={ imageUrl } alt="item" />
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">{ quantity }</span>
            <span className="price">{ price }</span>
            <div>
                <button className="remove-button">
                    Remove
                </button>
            </div>
        </div>
    )
};

export default CheckoutItems;
