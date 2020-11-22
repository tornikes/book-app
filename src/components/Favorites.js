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
                {
                    favs.length > 0 ? 
                    <div className="items">
                        {favs.map(book => <Book key={book.id} {...book} />)}
                    </div>
                    : 
                    <h3 style={{marginTop: '30px'}}>
                        You have not added books to your favorites list.
                    </h3>
                }
            </Container>
        </BookItems>
    );
}