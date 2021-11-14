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
    }

export const clearCart = () => {
        return {
            type: Actions.clearCart
        };
    };

    // category action
export const updateCategories = (categories) => {
        return {
            type: Actions.UPDATE_CATEGORIES,
            payload: categories
        };
    };

    // current category actions
export const updateCurrentCategory = (category) => {
        return {
            type: Actions.UPDATE_CURRENT_CATEGORY,
            payload: category
        };
    };

    // product action
export const updateProducts = (products) => {
        return {
            type: Actions.UPDATE_PRODUCTS,
            payload: products
        }
    };
