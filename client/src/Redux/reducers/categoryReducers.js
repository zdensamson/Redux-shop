import { Actions } from "../constants";

const initialCategoryState = {
    categories: []
};


export default function categoriesReducer(state = initialCategoryState, { type, payload }) {
    switch (type) {
        case Actions.UPDATE_CATEGORIES:
            return [...payload];
        default: 
            return state; 
    }
};