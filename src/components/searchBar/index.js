import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import Button from '../Button';
import './style.css';

const SearchBar = ({handleSearch}) => {
  const [query, setQuery] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    query !== "" && handleSearch(query);
  };
  return (
    <div className='search-container'>
    <form onSubmit={onSubmit}>
      <input
        name='song'
        className='input'
        plasceholder='input song name'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button leftIcon={<FaSearch/>} type='submit' aria-label='search song'>
        Search
      </Button>
    </form>
    </div>
  );
};

export default SearchBar;
