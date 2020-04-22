import React, { Component } from 'react';
import UserContext from './UserContext';

export default class UserProvider extends Component {
    state = { currentUser: { name: 'Kostas' } };

    render() {
        const { currentUser } = this.state;
        const { children } = this.props;
        return (
            <UserContext.Provider value={currentUser}>
                {children}
            </UserContext.Provider>
        );
    }
}
