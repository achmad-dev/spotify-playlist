import React from "react";
import './app.css';

const List = ({ id, title, img, artists, album}) => {
    return (
        <div key={id} className="table">
          <br/>
            <div>
                <h3 className="white-text">{title}</h3>
                <p>{artists}</p>
                <img src={img} alt={artists}/>
            </div>
            <div>
             <td>{album}</td>
             <button>Select</button>
            </div>
          <br/>
        </div>
    )
}

export default List;
