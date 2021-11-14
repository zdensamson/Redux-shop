import {
   UPDATE_CATEGORIES
} from '../constants.js'



export default function categoriesReducer(categories = [], { type, payload }) {
    switch (type) {
        case UPDATE_CATEGORIES:
            return [...payload];
        default: 
            return categories; 
    }
};