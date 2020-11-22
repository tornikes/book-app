import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeBooks } from './reducers/booksReducer';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Favorites from './components/Favorites';
import Details from './components/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './components/styled';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeBooks());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                    <Route path="/details/:id">
                        <Details />
                    </Route>
                    <Route>
                        <Homepage />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
