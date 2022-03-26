import './App.css'
import data from '../../simple/data.js'

const TrackAlbums = ({ name, album, images, songTitle }) => (
  <div>
    <h1>{name}</h1>
    <h2>{album}</h2>
    <img src={images} alt={name} width="300" height="300" className="rotate"/>
    <p>{songTitle}</p>
    <button>select</button>
  </div>
);

const ObjectLoop = () => {
  return (
      <div className="table-of-tracks">
        {data.map((data, idx) => {
          const {
            album: {
              images: [{ url: src }],
              name,
            },
            artists: [{ name: artist }],
            name: song,
          } = data;
          // console.log(data);
          return (
            <TrackAlbums
              key={idx}
              album={name}
              images={src}
              songTitle={song}
            />
          );
        })};
      </div>
  );
};

export default ObjectLoop;
