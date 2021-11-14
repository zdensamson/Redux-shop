import { Actions } from "./constants";

// cart actions
export const toggleCart = () => {
    return {
        type: Actions.TOGGLE_CART
    };
};

export const addToCart = (product) => {
    return {
        type: Actions.ADD_TO_CART,
        payload: product
    };
};

export const addMultipleToCart = (products) => {
    return {
        type: Actions.ADD_MULTIPLE_TO_CART,
        payload: products
    };
};

export const removeFromCart = (_id) => {
    return {
        type: Actions.REMOVE_FROM_CART,
        payload: _id
    };
};

export const updateCartQuantity = (_id, purchaseQty) => {
    return {
        type: Actions.updateCartQuantity,
        payload: {_id, purchaseQty}
    };
};

export const clearCart = () => {
    return {
        type: Actions.clearCart
    };
};
