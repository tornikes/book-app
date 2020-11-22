import React from 'react';
import { FavButton } from './styled';

export default function FavoriteButton({ isFavorited, handleClick }) {
    return (
        <FavButton isFavorited={isFavorited} onClick={handleClick}>
            <i className={`fa fa-${isFavorited ? 'times' : 'heart'}`}></i>
            {' '}
            {isFavorited ? 'Remove' : 'Add'}
        </FavButton>
    );
}