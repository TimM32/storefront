import { createStore, combineReducers } from 'redux';
import categoriesReducer from './Categories';
import productReducer from './Products';

const mainReducer = combineReducers({
    categories: categoriesReducer,
    products: productReducer,
});

const store = createStore(mainReducer);

export default store;