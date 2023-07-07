import { createStore, combineReducers } from 'redux';
import categoriesReducer from './Categories';
import productsReducer from './Products';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

const store = createStore(rootReducer);

export default store;