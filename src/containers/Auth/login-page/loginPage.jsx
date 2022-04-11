import React from 'react';
import { Button } from '@material-ui/core';
import Login from '../Login';
import { Div } from './loginPageStyles';

const LoginPage = () => {
    return (
        <Div>
            <Button onClick={Login}>Login with Spotify</Button>
        </Div>
    )
};

export default LoginPage;