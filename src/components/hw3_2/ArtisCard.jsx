
import Card from 'react-bootstrap/Card';

import spotifyLogo from '../assets/Spotify_Logo.png';

const ArtistCard = ({artist}) => (
    <Card key={artist.id}>
        {artist.images.length ? <img width="100%" src={artist.images[0].url} alt=""/> : <img src={spotifyLogo} alt=""/>}
        {artist.name}
    </Card>
)

export default ArtistCard;
