import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './reducers/booksReducer';
import favoritesReducer from './reducers/favoritesReducer';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const store = createStore(
    combineReducers({ 
        books: booksReducer,
        favorites: favoritesReducer
    }),
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));

export default store;