import React, { useState } from 'react';
import { DescWrapper } from './styled';

export default function Description({ text }) {
    const [expanded, setExpanded] = useState(false);
    const toDisplay = expanded ? text : text.substring(0, 450);
    const thereIsMore = text.length > 450;

    return (
        <DescWrapper>
            {toDisplay}
            {thereIsMore &&
                <a href='#' onClick={() => setExpanded(!expanded)}>
                    {expanded ? ' (less)' : ' (...more)'}
                </a>
            }
        </DescWrapper>
    );
}