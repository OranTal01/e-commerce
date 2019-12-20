import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from './cart-const-types';

export const toggleCartDropdownAction = () => ({
    type: TOGGLE_CART_DROPDOWN
});

export const addItemToCartAction = (item) => ({
    type: ADD_ITEM,
    payload: item
});
