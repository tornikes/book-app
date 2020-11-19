import React from 'react';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../reducers/favoritesReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function Book({ volumeInfo, id }) {
    const dispatch = useDispatch();
    const isFavorited = useSelector(state => state.favorites.includes(id));
    
    return (
        <article>
            this is an individual book view for {volumeInfo.title}

            <footer>
                <button onClick={() => dispatch(toggleFavorite(id))}>
                    {isFavorited ? 'Remove from favorites'  : 'Add to favorites'}
                </button>
                {' '}
                <Link to={`/details/${id}`}>See More</Link>
            </footer>
        </article>
    );
}