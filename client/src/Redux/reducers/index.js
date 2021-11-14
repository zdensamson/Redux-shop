import {createStore, combineReducers} from "redux";

import cartReducer from "./cartReducers";
import categoriesReducer from "./categoryReducers";
import currentCategoryReducer from "./currentCategoryReducer";
import productsReducer from "./productReducers";

const rootReducer = combineReducers({
    products: productsReducer,
    currentCategory: currentCategoryReducer,
    categories: categoriesReducer,
    cart: cartReducer
});

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});
export default store; 