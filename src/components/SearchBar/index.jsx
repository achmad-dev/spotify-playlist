import React, { useState } from 'react';
import config from '../../lib/config';
import Button from '../Button';
import './index.css';
import PropTypes from 'prop-types';
export default function SearchBar({ accessToken, onSuccess, onClearSearch }) {
  const [text, setText] = useState('');
  const [isClear, setIsClear] = useState(true);

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`, requestOptions)
        .then((data) => data.json());

      const tracks = response.tracks.items;
      onSuccess(tracks);
      setIsClear(false);
    } catch (e) {
      alert(e);
    }
  }

  const handleClear = () => {
    onClearSearch();
    setText('');
    setIsClear(true);
  }

  return (
    <div>
      <form className="form-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="form-search__input"
          required
          value={text}
          onChange={handleInput}
        />
        <Button type="submit">Search</Button>
      </form>

      {!isClear && (
        <Button variant="text" onClick={handleClear} className="mt-1">Clear search</Button>
      )}
    </div>
  )
}

SearchBar.propTypes = {
  accessToken: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
}
