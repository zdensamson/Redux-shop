import {
   UPDATE_CURRENT_CATEGORY
 } from '../constants.js'

const initialCurrentCategoryState = {
    currentCategory: ''
};

export default function currentCategoryReducer(state = initialCurrentCategoryState, { type, payload }) {
    switch(type) {
        case UPDATE_CURRENT_CATEGORY:
            return payload;
        default:
            return state; 
    }
};