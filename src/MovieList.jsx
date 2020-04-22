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
                        Movie List {userContext.name} <MovieRow />
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}
