import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '../index';
import { Provider } from 'react-redux';

const setup = () => {
    render(
        <Provider store={store}>
            <Form />
        </Provider>
    )
}

describe('Form Create Playlist should be render', () => {
    beforeEach(setup);
    afterEach(cleanup);
  
    it('Success render Create Playlist Form', () => {
      expect(screen.getByLabelText('title')).toBeInTheDocument();
      expect(screen.getByLabelText('description')).toBeInTheDocument();
      expect(screen.getByText('Create')).toBeInTheDocument();
    });
  
    it('Type in form Create Playlist', () => {
      const titleInput = screen.getByLabelText('title');
      const descriptionInput = screen.getByLabelText('description');
  
      userEvent.type(titleInput, 'Title');
      userEvent.type(descriptionInput, 'Description');
  
      expect(titleInput).toHaveValue('Title');
      expect(descriptionInput).toHaveValue('Description');
    });
  });