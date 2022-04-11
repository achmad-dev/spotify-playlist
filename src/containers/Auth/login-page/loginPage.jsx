import React from 'react';
import { Button } from '@material-ui/core';
import authorize from '../../../utils/authorize';
import { Div } from './loginPageStyles';

const LoginPage = () => {
    return (
        <Div>
            <Button onClick={authorize}>Login with Spotify</Button>
        </Div>
    )
};

export default LoginPage;