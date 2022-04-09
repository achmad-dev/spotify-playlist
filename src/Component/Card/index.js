import React, { useState } from "react";

const Card = ({ title, artist, img, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <div className="Card">
      <div className="card-wrapper">
        <img src={img} alt={title} className="card_img" />

        <h3 className="card_album">{title}</h3>
        <h3 className="card_artist">{artist}</h3>
      </div>
      <div className="btn-wrapper">
        <button className="btn-select" onClick={handleToggleSelect}>
          {isSelected ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
};
export default Card;
