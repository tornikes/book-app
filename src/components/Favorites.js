import React from 'react';
import Book from './Book';
import { useSelector } from 'react-redux';
import { BookItems, Container } from './styled';

export default function Favorites() {
    const favIds = useSelector(state => state.favorites);
    const favs = useSelector(state => state.books.filter(book => favIds.includes(book.id)));
    
    return (
        <BookItems>
            <Container>
                <h1>Favorite Books</h1>
                <div className="items">
                    {favs.map(book => <Book key={book.id} {...book} />)}
                </div>
            </Container>
        </BookItems>
    );
}