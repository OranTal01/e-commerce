import { TOGGLE_CART_DROPDOWN } from './cart-const-types';

const INITIAL_STATE = {
    toggle: true
}

const toggleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                toggle: !state.toggle
            }
        default:
            return state;
    }
}

export default toggleReducer;
