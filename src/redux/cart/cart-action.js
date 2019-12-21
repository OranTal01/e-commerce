import { TOGGLE_CART_DROPDOWN, ADD_ITEM, REMOVE_ITEM, SUBTRACT_QUANTITY } from './cart-const-types';

export const toggleCartDropdownAction = () => ({
    type: TOGGLE_CART_DROPDOWN
});

export const addItemToCartAction = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItemAction = (id) => ({
    type: REMOVE_ITEM,
    payload: id
});

export const subtractItemAction = (item) => ({
    type: SUBTRACT_QUANTITY,
    payload: item
});