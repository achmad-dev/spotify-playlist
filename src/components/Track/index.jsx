import React, { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function Track({ imageUrl, title, artist, toggleSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  }

  return (
    <div className="card">
      <div className="card__image">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="card__data">
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__artist">{artist}</p>
        </div>
        
        <div className="card__action">
          <Button variant={isSelected ? 'primary' : 'secondary'} onClick={handleToggleSelect}>{isSelected ? 'Deselect' : 'Select'}</Button>
        </div>
      </div>
    </div>
  );
}

Track.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  toggleSelect: PropTypes.func.isRequired,
}
