import React from "react";
import './app.css';

const List = ({data, id, title, img, artists, album, select,deselect, isSelected}) => {

  const handleSelect = () => {
    select(data);
}

const handleDeselect = () => {
    deselect(data);
}
    return (
        <div key={id} className="table">
          <br/>
            <div>
                <h3 className="white-text">{title}</h3>
                <p>{artists}</p>
                <img className="image" src={img} alt={artists}/>
            </div>
            <div>
             <p>{album}</p>
            </div>
            <div>
            {isSelected
                ? <button onClick={handleDeselect} className='btn select'>Deselect</button>
                : <button onClick={handleSelect} className='btn select'>Select</button>
            }
            </div>
          <br/>
        </div>
    )
}

export default List;
