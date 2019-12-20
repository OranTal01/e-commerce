import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const toggleCartDropdownSelector = createSelector([selectCart], (cart) => cart.toggleCartDropdown)

export const selectCartItems = createSelector
    ([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity, 0));

export const selectCartItemsTotal =
    createSelector([selectCartItems], (cartItems) => cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price, 0));