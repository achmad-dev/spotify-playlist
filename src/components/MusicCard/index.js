import Button from '../Button';
import Link from '../Link';
import './style.css';

const MusicCard = ({data}) => {
  const {album, artists, external_urls, name} = data;

  const artistText = artists.map((artist, id) => {
    const isLast = id === artists.length - 1;
    const text = isLast ? artist.name : artist.name + ", ";
    return (
      <Link href={artist.external_urls.spotify} key={artist.id}>
        {text}
      </Link>
    );
  });
  return (
    <div className='card'>
      <div className='img-container'>
        <Link href={album.external_urls.spotify}>
          <img
            className='albumImg'
            src={album.images[1].url}
            alt={album.name}
            />
          </Link>
        </div>
        <div className='description'>
          <div>
            <h4 className='title'>
              <Link href={external_urls.spotify}>{name}</Link> -{artistText}
            </h4>
            <h5 className='albumText'>
              <Link href={album.external_urls.spotify}>{album.name}</Link>
            </h5>
          </div>
          <div>
            <Button
             onClick={() => {
             console.log(data.id);
             }}
            >Select</Button>
          </div>
        </div>
    </div>
  );
};

export default MusicCard;
