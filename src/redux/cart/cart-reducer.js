import { TOGGLE_CART_DROPDOWN, ADD_ITEM, REMOVE_ITEM, SUBTRACT_QUANTITY } from './cart-const-types';
import { addItemToCart, removeItemFromCart, subtractItemFromCheckout } from './cart-utils';

const INITIAL_STATE = {
    toggleCartDropdown: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                toggleCartDropdown: !state.toggleCartDropdown
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case SUBTRACT_QUANTITY:
            return {
                ...state,
                cartItems: subtractItemFromCheckout(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
