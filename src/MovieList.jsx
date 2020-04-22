import React, { Component } from 'react';
import UserContext from './context/UserContext';
import MovieRow from './MovieRow';

export default class MovieList extends Component {
    static contextType = UserContext;

    componentDidMount() {
        // access here context value
        console.log(this.context);
    }

    render() {
        return (
            <UserContext.Consumer>
                {userContext => (
                    <div>
                        <span>Movie List </span>
                        {userContext.currentUser
                            ? userContext.currentUser.name
                            : ''}
                        <MovieRow />
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}
