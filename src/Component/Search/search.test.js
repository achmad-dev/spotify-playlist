import {render, userEvent, screen} from '@testing-library/react';
import Search from './index';
import { Provider } from "react-redux";
import store from '../../store/store';

describe('A search component', () => {
    render(<Provider store={store}>
        <Search />
        </Provider>);

    it('should have a search input', () => {
        const searchInput = screen.getByText('Search');
        expect(searchInput).toBeInTheDocument();
    }
    );
  });