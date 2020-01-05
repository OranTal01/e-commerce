import React from 'react';
import { removeItem } from '../../redux/cart/cart.actions';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  RemoveButton
} from './cart-item.styles';
import { connect } from 'react-redux';

const CartItem = ({ item, removeItem }) => {
  const { imageUrl, price, name, quantity } = item
  return (
    <CartItemContainer>
      <CartItemImage src={ imageUrl } alt='item' />
      <ItemDetailsContainer>
        <span>{ name }</span>
        <span>
          { quantity } x ${ price }
        </span>
      </ItemDetailsContainer>
      <RemoveButton onClick={ () => removeItem(item) }>remove</RemoveButton>
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);
