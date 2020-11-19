import React from 'react';
import Book from './Book';
import { useSelector } from 'react-redux';

export default function Favorites() {
    const favIds = useSelector(state => state.favorites);
    const favs = useSelector(state => state.books.filter(book => favIds.includes(book.id)));
    
    return (
        <div>
            <h1>Favorite Books</h1>
            {favs.map(book => <Book key={book.id} {...book} />)}
        </div>
    );
}