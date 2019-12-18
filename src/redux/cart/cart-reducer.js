import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from './cart-const-types';
import { addItemToCart } from './cart-utils';

const INITIAL_STATE = {
    toggle: true,
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                toggle: !state.toggle
            }
        case ADD_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
