import { Actions } from "../constants";

const initialState = {
    cartOpen: false,
    cart: []
};

export default function cartReducer(state = initialState, {type, payload}) {
    switch (type) {
        case Actions.TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };
        case Actions.CLEAR_CART:
            return {
                cart: [],
                cartOpen: false
            };
        case Actions.ADD_TO_CART: 
            return {
                cart: [...state.cart, payload],
                cartOpen: true
            };
        case Actions.ADD_MULTIPLE_TO_CART:
            return {
                cart: [...state.cart, ...payload],
                cartOpen: state.cart.length > 0 
            };
        case Actions.REMOVE_FROM_CART:
            const newState = state.cart.filter(product => product._id !== payload)
            return {
                cart: newState,
                cartOpen: newState.length > 0 
            };
        case Actions.UPDATE_CART_QUANTITY:
            return {
                cartOpen: true,  
                cart: state.cart.map(product =>{
                    if(product._id === payload._id) {
                        product.purchaseQty = payload.purchaseQty
                    }
                    return product; 
                })
            }
        default: 
            return state;
    };
};