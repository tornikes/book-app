import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import { Container, BookItems } from './styled';

export default function Homepage() {
    const books = useSelector(state => state.books);
    
    return (
        <BookItems>
            <Container>
                <h1>Books About Programming</h1>
                <div className="items">
                    {books.map(book => <Book key={book.id} {...book} />)}
                </div>
            </Container>
        </BookItems>
    );
}