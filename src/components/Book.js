import React from 'react';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../reducers/favoritesReducer';
import { useDispatch, useSelector } from 'react-redux';
import { BookCard, Thumbnail } from './styled';
import FavoriteButton from './FavoriteButton';

export default function Book({ volumeInfo, id }) {
    const dispatch = useDispatch();
    const isFavorited = useSelector(state => state.favorites.includes(id));
    
    return (
        <BookCard>
            <h3>{volumeInfo.title}</h3>
            <Thumbnail src={volumeInfo.imageLinks.thumbnail} alt=""/>
            <p>
                Authors: {volumeInfo.authors.join(' ')}, {volumeInfo.pageCount} pages, Language: {volumeInfo.language}
            </p>
            <footer>
                <FavoriteButton 
                    isFavorited={isFavorited} 
                    handleClick={() => dispatch(toggleFavorite(id))} 
                />
                {' '}
                <Link to={`/details/${id}`}>See More</Link>
            </footer>
        </BookCard>
    );
}