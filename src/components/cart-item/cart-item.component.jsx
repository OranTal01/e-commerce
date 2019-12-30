import React from 'react';
import { connect } from 'react-redux';
import { removeItemAction } from '../../redux/cart/cart-action';
import { CartItemContainer, Image, ItemDetailsContainer, Item, RemoveItem } from './cart-item.style';


const CartItem = ({ removeItemFromCartDropdown, item: { imageUrl, name, price, quantity, id } }) => {
    return (
        <CartItemContainer>
            <Image src={ imageUrl } alt='item' />
            <ItemDetailsContainer>
                <Item>{ name }</Item>
                <Item>{ quantity } X ${ price }</Item>
            </ItemDetailsContainer>
            <RemoveItem
                onClick={ () => removeItemFromCartDropdown(id) }>
                Remove
            </RemoveItem>
        </CartItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCartDropdown: (id) => dispatch(removeItemAction(id))
})

export default connect(null, mapDispatchToProps)(CartItem);