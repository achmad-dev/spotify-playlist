import './App.css'
import data from '../../simple/data.js'
import { GiPlayButton, GiPreviousButton, GiNextButton } from "react-icons/gi";

const TrackAlbums = ({ name, album, images, songTitle, artist }) => (
  <div className="Tracks">
    <h1>{name}</h1>
    <h2>{album}</h2>
    <img src={images} alt={name} width="300" height="300" className="rotate"/>
    <p>{songTitle}</p>
    <p>{artist}</p>
    <div className="music-button">
      <button><GiPreviousButton/></button>
      <button><GiPlayButton/></button>
      <button><GiNextButton /></button>
    </div>
  </div>
);

const ObjectLoop = () => {
  return (
      <div className="table-of-tracks">
        {data.map((data) => {
          return (
            <TrackAlbums
              key={data.album.id}
              album={data.album.name}
              images={data.album.images[0].url}
              songTitle={data.name}
              artist={data.artists[0].name}
            />
          );
        })};
      </div>
  );
};

export default ObjectLoop;
