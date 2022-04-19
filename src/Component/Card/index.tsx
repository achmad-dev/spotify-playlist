import { useState } from "react";
import { Image, Button, Div } from "./cardStyled";
import {Props} from "./cardTypes";


const Card = ({ title , artist, img, toggleSelect , duration }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
        <Div className="Card">
          <div>
            <Image src={img} alt={title} className="card_img" />
            <div className='CardInfo'>
              <p className="cardAlbum">{title}</p>
              <p>Artist: {artist}</p>
              <p>Song duration = {duration} minutes</p>
            </div>
          </div>
          <div>
            <Button className="btn-select" onClick={handleToggleSelect}>
              {isSelected ? "Deselect" : "Select"}
            </Button>
          </div>
        </Div>
  );
};
export default Card;
