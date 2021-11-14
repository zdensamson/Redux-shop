import {
    UPDATE_PRODUCTS} from '../constants.js'

const initialState = {
    products: []
};

export default function productsReducer(state = initialState, {type, payload}){
    switch (type) {
        case UPDATE_PRODUCTS:
            return [...payload]
        default: 
            return state
    }
};