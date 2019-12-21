export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemIdToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== itemIdToRemove)
};

export const subtractItemFromCheckout = (cartItems, subtractItem) => {
    const subtractQuantityItem = cartItems.find((cartItem) => cartItem.id === subtractItem.id);

    if (subtractQuantityItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== subtractQuantityItem.id)
    } else {
        return cartItems.map((cartItem) => cartItem.id === subtractQuantityItem.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
    };
};