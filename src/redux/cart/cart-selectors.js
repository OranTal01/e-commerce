import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

export const toggleCartDropdownSelector = createSelector([cartSelector], (cart) => cart.toggleCartDropdown)

export const cartItemsSelector = createSelector
    ([cartSelector], (cart) => cart.cartItems);

export const cartItemsCountSelector = createSelector([cartItemsSelector], (cartItems) => cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity, 0));

export const cartItemsTotalSelector =
    createSelector([cartItemsSelector], (cartItems) => cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price, 0));