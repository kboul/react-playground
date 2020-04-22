import React, { useContext } from 'react';
import UserContext from './context/UserContext';

function Login() {
    const { onLoggedIn } = useContext(UserContext);
    return (
        <div>
            <button type="button" onClick={() => onLoggedIn('username')}>
                Login
            </button>
        </div>
    );
}

export default Login;
