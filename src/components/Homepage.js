import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

export default function Homepage() {
    const books = useSelector(state => state.books);
    
    return (
        <div>
            <h1>Books About Programming</h1>
            {books.map(book => <Book key={book.id} {...book} />)}
        </div>
    );
}