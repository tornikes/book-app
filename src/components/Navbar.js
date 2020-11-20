import React from 'react';
import { Link } from 'react-router-dom';
import { Container, StyledNav } from './styled';

export default function Navbar() {
    return (
        <StyledNav>
            <Container>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            Favorites
                        </Link>
                    </li>
                </ul>
            </Container>
        </StyledNav>
    );
}