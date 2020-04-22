import React from 'react';
import Movie from './Movie';
import UserProvider from './context/UserProvider';
import MovieList from './MovieList';

function App() {
    return (
        <>
            <Movie id={3} />
            <UserProvider>
                <MovieList />
            </UserProvider>
        </>
    );
}

export default App;
