import styled, { createGlobalStyle } from 'styled-components';

const theme = {
    primaryText: '#000',
};

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;


export const Container = styled.div`
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
`;

export const StyledNav = styled.nav`
    font-size: 1.5rem;
    font-weight: bold;
    background-color: darkblue;
    ${Container} {
        & ul {
            display: flex;
            & a {
                color: white;
                display: block;
                padding: 12px 15px;
            
                &:hover {
                    background-color: palevioletred;
                }
            }
            @media (max-width: 400px) {
                justify-content: center;
            }
        }
    }
`;

export const BookItems = styled.div`
    background-color: beige;
    ${Container} {
        padding-top: 30px;
        & .items {
            padding-top: 30px;
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }
`;

export const BookCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    h3 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    footer {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Thumbnail = styled.img`
    display: block;
    height: 150px;
    align-self: center;
`;

export const FavButton = styled.button`
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    height: 25px;
    width: 90px;
    border: none;
    cursor: pointer;
    background-color: ${props => props.isFavorited ? 'red' : 'green'};
    &:active, &:focus {
        outline: none;
    }
`;

export const DetailsView = styled.div`
    background-color: beige;
    ${Container} {
        padding-top: 30px;
        display: flex;
        justify-content: center;
        gap: 15px;

        img {
            display: block;
            width: 20%;
            min-width: 150px;
            align-self: flex-start;
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 7.5px;
        }
    }
`;

export const DescWrapper = styled.p`
    max-width: 300px;
`;