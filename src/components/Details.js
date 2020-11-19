import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Details() {
    const { id } = useParams();
    const book = useSelector(state => state.books.find(book => book.id === id));

    return (
        <div>
            {book.volumeInfo.title}
        </div>
    );
}