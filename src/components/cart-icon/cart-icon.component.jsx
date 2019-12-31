import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { cartItemsCountSelector } from '../../redux/cart/cart-selectors';
import { connect } from 'react-redux';
import { CartIconSvg, ShoppingIconWrapper, ItemCount } from './cart-icon.style';

const CartIcon = ({ numberCartItems }) => {
    return (
        <CartIconSvg>
            <ShoppingIconWrapper />
            <ItemCount>{ numberCartItems }</ItemCount>
        </CartIconSvg>
    );
};

const mapStateToProps = (state) => ({
    numberCartItems: cartItemsCountSelector(state)
})

export default connect(mapStateToProps)(CartIcon);
