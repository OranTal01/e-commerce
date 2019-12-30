import React from 'react';
import { connect } from 'react-redux';
import { removeItemAction, addItemToCartAction, subtractItemAction } from '../../redux/cart/cart-action';
import { CheckoutItemContainer, ImageContainer, NameItem, QuantityItem, PriceItem, QuantityArrow, QuantityValue, RemoveButton } from './cart-checkout.style';

const CheckoutItems =
    ({ removeItemFromCart, addItemQuantity, cartItem, subtractItemFromCheckout }) => {
        const { id, imageUrl, name, quantity, price } = cartItem
        return (
            <CheckoutItemContainer>
                <ImageContainer>
                    <img src={ imageUrl } alt="item" />
                </ImageContainer>
                <NameItem>{ name }</NameItem>
                <QuantityItem>
                    <QuantityArrow
                        onClick={ () => subtractItemFromCheckout(cartItem) }>&#10094;
                        </QuantityArrow>
                    <QuantityValue>
                        { quantity }
                    </QuantityValue>
                    <QuantityArrow
                        onClick={ () => addItemQuantity(cartItem) }>&#10095;
                    </QuantityArrow>
                </QuantityItem>
                <PriceItem>{ price }</PriceItem>
                <div>
                    <RemoveButton
                        onClick={ () => removeItemFromCart(id) }>
                        Remove
                </RemoveButton>
                </div>
            </CheckoutItemContainer>
        )
    };

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (id) => dispatch(removeItemAction(id)),
    addItemQuantity: (item) => dispatch(addItemToCartAction(item)),
    subtractItemFromCheckout: (item) => dispatch(subtractItemAction(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItems);
