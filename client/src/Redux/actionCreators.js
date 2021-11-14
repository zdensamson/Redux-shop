import {
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_CART_QUANTITY,
    TOGGLE_CART,
   UPDATE_CATEGORIES,
   UPDATE_CURRENT_CATEGORY,
    UPDATE_PRODUCTS} from './constants.js'


    // cart actions
export const toggleCart = () => {
        return {
            type: TOGGLE_CART
        };
    };

export const addToCart = (product) => {
        return {
            type: ADD_TO_CART,
            payload: product
        };
    };

export const addMultipleToCart = (products) => {
        return {
            type: ADD_MULTIPLE_TO_CART,
            payload: products
        };
    };

export const removeFromCart = (_id) => {
        return {
            type: REMOVE_FROM_CART,
            payload: _id
        };
    };

export const updateCartQuantity = (_id, purchaseQuantity) => {
        return {
            type: UPDATE_CART_QUANTITY,
            payload: {_id, purchaseQuantity}
        };
    }

export const clearCart = () => {
        return {
            type: CLEAR_CART
        };
    };

    // category action
export const updateCategories = (categories) => {
        return {
            type: UPDATE_CATEGORIES,
            payload: categories
        };
    };

    // current category actions
export const updateCurrentCategory = (categories) => {
        return {
            type: UPDATE_CURRENT_CATEGORY,
            payload: categories
        };
    };

    // product action
export const updateProducts = (products) => {
        return {
            type: UPDATE_PRODUCTS,
            payload: products
        }
    };
