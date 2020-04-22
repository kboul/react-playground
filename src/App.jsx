import React from 'react';
import Movie from './Movie';
import UserProvider from './context/UserProvider';
import MoviePage from './MoviePage';

function App() {
    return (
        <>
            <Movie id={3} />
            <UserProvider>
                <MoviePage />
            </UserProvider>
        </>
    );
}

export default App;
