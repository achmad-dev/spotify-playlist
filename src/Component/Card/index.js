import React, { useState } from "react";
import { Div, Image, Button, CardInfo } from "./cardStyled";

const Card = ({ title, artist, img, toggleSelect, duration }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <Div className="Card">
      <Div className="card-wrapper">
        <Image src={img} alt={title} className="card_img" />
        <div className={CardInfo}>
          <p className="card_album">{title}</p>
          <p>{artist}</p>
          <p>{duration} minutes</p>
        </div>
      </Div>
      <div>
        <Button className="btn-select" onClick={handleToggleSelect}>
          {isSelected ? "Deselect" : "Select"}
        </Button>
      </div>
    </Div>
  );
};
export default Card;
