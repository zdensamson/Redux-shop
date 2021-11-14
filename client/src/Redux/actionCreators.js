import { Actions } from "./constants";

export const ActionCreators = {
    // cart actions
    toggleCart = () => {
        return {
            type: Actions.TOGGLE_CART
        };
    },
    addToCart = (product) => {
        return {
            type: Actions.ADD_TO_CART,
            payload: product
        };
    },
    addMultipleToCart = (products) => {
        return {
            type: Actions.ADD_MULTIPLE_TO_CART,
            payload: products
        };
    },
    removeFromCart = (_id) => {
        return {
            type: Actions.REMOVE_FROM_CART,
            payload: _id
        };
    },
    updateCartQuantity = (_id, purchaseQty) => {
        return {
            type: Actions.updateCartQuantity,
            payload: {_id, purchaseQty}
        };
    },
    clearCart = () => {
        return {
            type: Actions.clearCart
        };
    },
    // category action
    updateCategories = (categories) => {
        return {
            type: Actions.UPDATE_CATEGORIES,
            payload: categories
        };
    },
    // current category actions
    updateCurrentCategory = (category) => {
        return {
            type: Actions.UPDATE_CURRENT_CATEGORY,
            payload: category
        };
    },
    // product action
    updateProducts = (products) => {
        return {
            type: Actions.UPDATE_PRODUCTS,
            payload: products
        }
    }
}