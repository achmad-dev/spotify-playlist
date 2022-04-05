import Button from "../button";
import Link from "../link";
import "./style.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Typography from '@mui/material/Typography';
import SpotifyPlayer from 'react-spotify-web-playback';
const MusicCard = ({ data, isSelected, handleSelect }) => {
  const { album, artists, external_urls, name } = data;
  const artistText = artists.map((artist, idx) => {
    return (
      <Link href={artist.external_urls.spotify} key={artist.id}>
        {artist.name}
      </Link>
    );
  });
  return (
    <div className='card'>
      <div className='imageContainer'>
        <Link href={album.external_urls.spotify}>
          <img
            className='albumArt'
            src={album.images[1].url}
            alt={album.name}
          />
        </Link>
      </div>
      <div className='description'>
        <div>
          <h4 className='title'>
            <Link href={external_urls.spotify}>{name}</Link> - {artistText}
          </h4>
          <h5 className='albumText'>
            <Link href={album.external_urls.spotify}>{album.name}</Link>
          </h5>
        </div>
        <div>
          <Button
            variant={isSelected ? "gray" : "default"}
            onClick={() => handleSelect(data.uri)}
          >
            {isSelected ? <Typography>Selected <CheckBoxIcon/></Typography> : <Typography><b>Select</b> <CheckBoxOutlineBlankIcon/></Typography>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
