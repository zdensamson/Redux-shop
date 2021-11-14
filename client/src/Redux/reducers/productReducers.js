import { Actions } from "../constants";

const initialState = {
    products: []
};

export default function productsReducer(state = initialState, {type, payload}){
    switch (type) {
        case Actions.UPDATE_PRODUCTS:
            return [...payload]
        default: 
            return state
    }
};