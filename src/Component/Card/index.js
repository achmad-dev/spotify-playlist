import React, { useState } from "react";
import { Div } from "./cardStyled";

const Card = ({ title, artist, img, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <Div className="Card">
        <img src={img} alt={title} className="card_img" />

        <h3 className="card_album">{title}</h3>
        <h3 className="card_artist">{artist}</h3>
        <button className="btn-select" onClick={handleToggleSelect}>
          {isSelected ? "Deselect" : "Select"}
        </button>
    </Div>
  );
};
export default Card;
