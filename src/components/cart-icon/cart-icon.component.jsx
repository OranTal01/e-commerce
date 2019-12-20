import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { connect } from 'react-redux';
import './cart-icon.style.scss';


const CartIcon = ({ numberCartItems }) => {
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{ numberCartItems }</span>
        </div>
    );
};

const mapStateToProps = (state) => ({
    numberCartItems: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartIcon);
