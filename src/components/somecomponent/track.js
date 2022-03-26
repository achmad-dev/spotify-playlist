import data from '../../simple/data.js'

const TrackAlbums = ({ name, album, images, songTitle, songArtist }) => (
  <div>
    <h1>{name}</h1>
    <h2>{album}</h2>
    <img src={images} alt={name}/>
    <p>{songTitle}</p>
    <p>songArtist</p>
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
              songArtist={artist}
            />
          );
        })};
      </div>
  );
};

export default ObjectLoop;
