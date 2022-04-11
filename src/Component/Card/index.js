import React, { useState } from "react";
import { Div, Image, Button } from "./cardStyled";

const Card = ({ title, artist, img, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <Div className="Card">
      <Div className="card-wrapper">
        <Image src={img} alt={title} className="card_img" />

        <h3 className="card_album">{title}</h3>
        <h3 className="card_artist">{artist}</h3>
      </Div>
      <Div className="btn-wrapper">
        <Button className="btn-select" onClick={handleToggleSelect}>
          {isSelected ? "Deselect" : "Select"}
        </Button>
      </Div>
    </Div>
  );
};
export default Card;
