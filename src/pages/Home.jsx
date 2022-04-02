import React, { useEffect, useState } from 'react'
import Track from '../components/Track';
import SearchBar from '../components/SearchBar';
import config from '../lib/config';
import Button from '../components/Button';

export default function Home() {
  const [accessToken, setAccessToken] = useState('');
  const [isAuthorize, setIsAuthorize] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [selectedTracksUri, setSelectedTracksUri] = useState([]);
  const [isInSearch, setIsInSearch] = useState(false);

  useEffect(() => {
    const accessToken = new URLSearchParams(window.location.hash).get('#access_token');

    setAccessToken(accessToken);
    setIsAuthorize(accessToken !== null);
  }, []);

  useEffect(() => {
    if (!isInSearch) {
      const selectedTracks = filterSelectedTracks();

      setTracks(selectedTracks);
    }
  }, [selectedTracksUri]);

  const getSpotifyLinkAuthorize = () => {
    const state = Date.now().toString();
    const clientId = process.env.REACT_APP_CLIENT_ID;

    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/redirect&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
  }

  const filterSelectedTracks = () => {
    return tracks.filter((track) => selectedTracksUri.includes(track.uri));
  }

  const onSuccessSearch = (searchTracks) => {
    setIsInSearch(true);
    const selectedTracks = filterSelectedTracks();
    const searchDistincTracks = searchTracks.filter((track) => !selectedTracksUri.includes(track.uri));

    setTracks([...selectedTracks, ...searchDistincTracks]);
  }


  const clearSearch = () => {
    const selectedTracks = filterSelectedTracks();

    setTracks(selectedTracks);
    setIsInSearch(false);
  }


  const toggleSelect = (track) => {
    const uri = track.uri;

    if (selectedTracksUri.includes(uri)) {
      setSelectedTracksUri(selectedTracksUri.filter((item) => item !== uri));
    } else {
      setSelectedTracksUri([...selectedTracksUri, uri]);
    }
  }

  return (
    <>
      {!isAuthorize && (
        <main className="center">
          <p>Login for next step...</p>
          <Button href={getSpotifyLinkAuthorize()}>Authorize</Button>
        </main>
      )}

      {isAuthorize && (
        <main className="container" id="home">
          <SearchBar
            accessToken={accessToken}
            onSuccess={(tracks) => onSuccessSearch(tracks)}
            onClearSearch={clearSearch}
          />

          <div className="content">
            {tracks.length === 0 && (
              <p>No tracks</p>
            )}

            <div className="tracks">
              {tracks.map((track) => (
                <Track
                  key={track.id}
                  imageUrl={track.album.images[0].url}
                  title={track.name}
                  artist={track.artists[0].name}
                  toggleSelect={() => toggleSelect(track)}
                />
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
