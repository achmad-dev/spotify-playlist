import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../button";
import style from "./style.module.css";
const SearchBar = ({ handleSearch, isLoading }) => {
  const [query, setQuery] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    query !== "" && handleSearch(query);
  };
  return (
    <div className={style.searchContainer}>
      <form onSubmit={onSubmit}>
        <input
          name="song"
          className={style.input}
          placeholder="Input song name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          isLoading={isLoading}
          leftIcon={<FaSearch />}
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
