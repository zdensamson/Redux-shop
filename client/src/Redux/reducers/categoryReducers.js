import { Actions } from "../constants";

const initialCategoryState = {
    categories: []
};
const initialCurrentCategoryState = {
    currentCategory: ''
};

export default function categoriesReducer(state = initialCategoryState, { type, payload }) {
    switch (type) {
        case Actions.UPDATE_CATEGORIES:
            return [...payload];
        default: 
            return state; 
    }
};

export default function currentCategoryReducer(state = initialCurrentCategoryState, { type, payload }) {
    switch(type) {
        case Actions.UPDATE_CURRENT_CATEGORY:
            return payload;
        default:
            return state; 
    }
};