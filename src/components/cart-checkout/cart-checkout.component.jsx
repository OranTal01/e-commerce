import React from 'react';
import { connect } from 'react-redux';
import { removeItemAction, addItemToCartAction, subtractItemAction } from '../../redux/cart/cart-action';
import './cart-checkout.style.scss';

const CheckoutItems =
    ({ removeItemFromCart, addItemQuantity, cartItem, subtractItemFromCheckout }) => {
        const { id, imageUrl, name, quantity, price } = cartItem
        return (
            <div className="checkout-item">
                <div className="image-container">
                    <img src={ imageUrl } alt="item" />
                </div>
                <span className="name">{ name }</span>
                <span className="quantity">
                    <div className="arrow" onClick={ () => subtractItemFromCheckout(cartItem) }>&#10094;</div>
                    <span className="value">
                        { quantity }
                    </span>
                    <div className="arrow" onClick={ () => addItemQuantity(cartItem) }>&#10095;</div>

                </span>
                <span className="price">{ price }</span>
                <div>
                    <button
                        className="remove-button"
                        onClick={ () => removeItemFromCart(id) }>
                        Remove
                </button>
                </div>
            </div>
        )
    };

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (id) => dispatch(removeItemAction(id)),
    addItemQuantity: (item) => dispatch(addItemToCartAction(item)),
    subtractItemFromCheckout: (item) => dispatch(subtractItemAction(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItems);
