import { fetchBooks } from '../bookService';

export default function booksReducer(state = [], action = {}) {
    switch(action.type) {
        case 'BOOKS_FETCHED': return action.data.books;
        default: return state;
    }
}

export function initializeBooks() {
    return async function(dispatch) {
        const data = await fetchBooks();
        dispatch({
            type: 'BOOKS_FETCHED',
            data: { books: data.items }
        });
    }
}