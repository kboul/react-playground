import React from 'react';
import Movie from './Movie';
import UserProvider from './context/UserProvider';
import MoviePage from './MoviePage';
import Login from './Login';

function App() {
    return (
        <>
            <Movie id={3} />
            <UserProvider>
                <MoviePage />
                <Login />
            </UserProvider>
        </>
    );
}

export default App;
