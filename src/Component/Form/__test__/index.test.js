import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '../index';
import { store } from '../../../store/store';
import { Provider } from 'react-redux';



test('it should render login button properly', () => {
  render(<Provider store={store}>
    <Form />
  </Provider>);

  
    
  expect(screen.getByLabelText('title')).toBeInTheDocument();
  expect(screen.getByLabelText('description')).toBeInTheDocument();
  expect(screen.getByText('Create')).toBeInTheDocument();
  
  const titleInput = screen.getByLabelText('title');
  const descriptionInput = screen.getByLabelText('description');
  
  userEvent.type(titleInput, 'Title');
  userEvent.type(descriptionInput, 'Description');
  
  expect(titleInput).toHaveValue('Title');
  expect(descriptionInput).toHaveValue('Description');
    
});