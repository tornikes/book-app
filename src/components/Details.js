import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Ratings from './Ratings';
import Description from './Description';
import { DetailsView, Container } from './styled';
import FavoriteButton from './FavoriteButton';
import { toggleFavorite } from '../reducers/favoritesReducer';

export default function Details() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const book = useSelector(state => state.books.find(book => book.id === id));
    const isFavorited = useSelector(state => state.favorites.includes(id));

    return (
        <DetailsView>
            <Container>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
                <div className='info'>
                    <h2>
                        {book.volumeInfo.title}
                    </h2>
                    <p>by {book.volumeInfo.authors.join(', ')}</p>
                    <Ratings
                        average={book.volumeInfo.averageRating}
                        total={book.volumeInfo.ratingsCount}
                    />
                    <FavoriteButton 
                        isFavorited={isFavorited}
                        handleClick={() => dispatch(toggleFavorite(id))}
                    />
                    <Description
                        text={book.volumeInfo.description}
                    />
                </div>
            </Container>
        </DetailsView>
    );
}