import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Button from "../button";
import "./style.css";
const SearchBar = ({ handleSearch, isLoading }) => {
  const [query, setQuery] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    query !== "" && handleSearch(query);
  };
  return (
    <div className='searchContainer'>
      <form onSubmit={onSubmit}>
        <input
          name="song"
          className='input'
          placeholder="Input song name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          isLoading={isLoading}
          leftIcon={<SearchIcon />}
          type="submit"
          aria-label="search song"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
