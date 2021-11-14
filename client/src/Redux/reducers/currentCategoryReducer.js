import { Actions } from "../constants";

const initialCurrentCategoryState = {
    currentCategory: ''
};

export default function currentCategoryReducer(state = initialCurrentCategoryState, { type, payload }) {
    switch(type) {
        case Actions.UPDATE_CURRENT_CATEGORY:
            return payload;
        default:
            return state; 
    }
};