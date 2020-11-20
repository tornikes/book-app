import React from 'react';

export default function Ratings({ average = 0, total = 0 }) {
    let stars = [];
    if(average === 0) {
        stars = new Array(5).fill('star-o');
    } else {
        while(average > 0) {
            if(average >= 1) {
                stars.push('star');
                average -= 1;
            } else {
                stars.push('star-half-o');
                average -= 1;
            }
        }
        while(stars.length < 5) {
            stars.push('star-o');
        }
    }

    return (
        <p>
            {stars.map(star => <i className={`fa fa-${star}`}></i>)}
            {' - '}
            {total} {total === 1 ? 'Rating' : 'Ratings'}
        </p>
    );
}