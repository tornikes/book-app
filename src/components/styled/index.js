import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
    primaryBg: '#e8e8e8',
    primaryText: '#222831',
    hoverBg: '#f05454',
    secondaryBg: '#30475e',
    secondaryText: '#FFF',
    bgDanger: '#d9534f',
    bgSuccess: '#5cb85c'
};

export const GlobalStyles = createGlobalStyle`
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

    body {
        background-color: ${props => props.theme.primaryBg};
        color: ${props => props.theme.primaryText}
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
    background-color: ${props => props.theme.secondaryBg};
    ${Container} {
        & ul {
            display: flex;
            & a {
                color: ${props => props.theme.secondaryText};
                display: block;
                padding: 12px 15px;
            
                &:hover {
                    background-color: ${props => props.theme.hoverBg};
                }
            }
            @media (max-width: 400px) {
                justify-content: center;
            }
        }
    }
`;

export const BookItems = styled.div`
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
    transition: box-shadow 0.2s ease-out;

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

    &:hover {
        -webkit-box-shadow: 0px 0px 33px -7px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 33px -7px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 33px -7px rgba(0,0,0,0.75);
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
    background-color: ${props => props.isFavorited ? 
        props.theme.bgDanger : props.theme.bgSuccess};
    &:active, &:focus {
        outline: none;
    }
`;

export const DetailsView = styled.div`
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