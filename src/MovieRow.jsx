import React, { useContext } from 'react';
import UserContext from './context/UserContext';

function MovieRow() {
    const userContext = useContext(UserContext);

    return (
        <div>
            <span>Movie Row </span>
            {userContext.currentUser ? userContext.currentUser.name : ''}
        </div>
    );
}

export default MovieRow;
