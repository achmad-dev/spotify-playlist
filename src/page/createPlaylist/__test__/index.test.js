import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createPlaylist } from '../index';
import { Provider } from 'react-redux';

const setup = () => {
    render(
        <Provider store={store}>
            <CreatePlaylist />
        </Provider>
    )
}