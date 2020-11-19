import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './reducers/booksReducer';
import favoritesReducer from './reducers/favoritesReducer';

const store = createStore(
    combineReducers({ 
        books: booksReducer,
        favorites: favoritesReducer
    }),
    applyMiddleware(thunk)
);

export default store;