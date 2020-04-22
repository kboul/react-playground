import React, { Component } from 'react';
import UserContext from './UserContext';

export default class UserProvider extends Component {
    state = { currentUser: null };

    handleLoggedIn = username => {
        console.log('Getting the user', username);
        const user = { name: 'Kostas' };
        this.setState({ currentUser: user });
    };

    render() {
        const { currentUser } = this.state;
        const { children } = this.props;

        return (
            <UserContext.Provider
                value={{ currentUser, onLoggedIn: this.handleLoggedIn }}>
                {children}
            </UserContext.Provider>
        );
    }
}
