import { useState } from "react";
import { Div, Image, Button} from "./cardStyled";
import {Props} from "./cardType";


const Card = ({ title , artist, img, toggleSelect , duration }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <Div className="Card">
      <Div className="card-wrapper">
        <Image src={img} alt={title} className="card_img" />
        <div className='CardInfo'>
          <p className="cardAlbum">{title}</p>
          <p>Artist: {artist}</p>
          <p>Song duration = {duration} minutes</p>
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
