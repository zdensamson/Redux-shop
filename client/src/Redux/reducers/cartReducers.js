 import {
 ADD_TO_CART,
 ADD_MULTIPLE_TO_CART,
 REMOVE_FROM_CART,
 CLEAR_CART,
 UPDATE_CART_QUANTITY,
 TOGGLE_CART,
UPDATE_CATEGORIES,
UPDATE_CURRENT_CATEGORY,
 UPDATE_PRODUCTS} from '../constants.js'

const initialState = {
    cartOpen: false,
    cart: []
};

export default function cartReducer(state = initialState, {type, payload}) {
    switch (type) {
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };
        case CLEAR_CART:
            return {
                cart: [],
                cartOpen: false
            };
        case ADD_TO_CART: 
            return {
                cart: [...state.cart, payload],
                cartOpen: true
            };
        case ADD_MULTIPLE_TO_CART:
            return {
                cart: [...state.cart, ...payload],
                cartOpen: state.cart.length > 0 
            };
        case REMOVE_FROM_CART:
            const newState = state.cart.filter(product => product._id !== payload)
            return {
                cart: newState,
                cartOpen: newState.length > 0 
            };
        case UPDATE_CART_QUANTITY:
            return {
                cartOpen: true,  
                cart: state.cart.map(product =>{
                    if(product._id === payload._id) {
                        product.purchaseQuantity = payload.purchaseQuantity
                    }
                    return product; 
                })
            }
        default: 
            return state;
    };
};