import React from 'react';
import { connect } from 'react-redux';
import { removeItemAction } from '../../redux/cart/cart-action';
import './cart-item.style.scss';


const CartItem = ({ removeItemFromCartDropdown, item: { imageUrl, name, price, quantity, id } }) => {
    return (
        <div className="cart-item">
            <img src={ imageUrl } alt='item' />
            <div className="item-details">
                <span className="name">{ name }</span>
                <span className="name">{ quantity } X ${ price }</span>
            </div>
            <button onClick={ () => removeItemFromCartDropdown(id) }
                className="remove-item">
                Remove
            </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCartDropdown: (id) => dispatch(removeItemAction(id))
})

export default connect(null, mapDispatchToProps)(CartItem);