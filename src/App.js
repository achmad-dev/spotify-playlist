import {useEffect, useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';

import './App.css';
import AlbumCard from "./components/AlbumCard";
import ArtistCard from "./components/ArtistCard";
import SongCard from "./components/SongCard";
import SectionTitle from "./components/SectionTitle";

// Instantiate Spotify API wrapper
let spotifyApi = new SpotifyWebApi();
let spotifyToken = window.localStorage.getItem("token");
if (spotifyToken) {
  spotifyApi.setAccessToken(spotifyToken);
}

function App() {
  // Begin login procedure
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_AUTH_URL;
  const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_URL;
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);

    spotifyApi.setAccessToken(token);

  }, [])

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }
  // End login procedure

  const [songs, setSongs] = useState(1);
  const [artists, setArtists] = useState(1);
  const [albums, setAlbums] = useState(1);
  let placeholder = "https://cover.djpunjab.com/39659/300x700/Om-Namah-Shivaya-Mohan-Kannan.jpg";
  let updateResults = (searchString) => {
    // Search songs
    spotifyApi.searchTracks(searchString, { limit: 4, offset: 0 }).then(
      function(data) {
        console.log('Searched songs by "' + searchString + '"', data.body);
        window.mySongs = data.body;

        setSongs(data.body.tracks.items);
      }, function(err) {
        console.error(err);
      }
    );

    // Search artists
    spotifyApi.searchArtists(searchString, { limit: 4, offset: 0 }).then(
      function(data) {
        console.log('Searched artists by "' + searchString + '"', data.body);
        window.myArtists = data.body;

        setArtists(data.body.artists.items);
      }, function(err) {
        console.error(err);
      }
    );

    // Search albums
    spotifyApi.searchAlbums(searchString, { limit: 4, offset: 0 }).then(
      function(data) {
        console.log('Searched albums by "' + searchString + '"', data.body);
        window.myAlbums = data.body;

        setAlbums(data.body.albums.items);
      }, function(err) {
        console.error(err);
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">
          {!token || !window.localStorage.getItem("token") ? <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}><button className="spotify-button">Login to Spotify</button></a>
              : <button className="spotify-button" onClick={logout}>Logout</button>}
          <h1>Search for songs, artists or albums on Spotify</h1>
      </header>

      <Box
        sx={{
          ml: 'auto',
          mr: 'auto',
          width: 500,
          maxWidth: '100%',
          minHeight: 100
        }}
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="Songs, artists, or albums"
          variant="outlined"
          onKeyPress={(event) => {
            if (event.key === 'Enter'){
              console.log(event.target.value)
              updateResults(event.target.value)
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <MicIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>

      <SectionTitle text={"Songs"}></SectionTitle>

      <Grid container spacing={3} justifyContent="space-evenly">
        {songs.map && songs.map(song => (
          <Grid item xs={12} sm={6} md={3} key={song.id}>
            <SongCard title={song.name} artist={song.artists[0].name} imageURL={(song.album.images[1] && song.album.images[1].url) || placeholder} url={song.external_urls.spotify}></SongCard>
          </Grid>
        ))}
      </Grid>

      <SectionTitle text={"Artists"}></SectionTitle>

      <Grid container spacing={3} justifyContent="space-evenly">
        {artists.map && artists.map(artist => (
          <Grid item xs={12} sm={6} md={3} key={artist.id}>
            <ArtistCard name={artist.name} followers={artist.followers.total} imageURL={(artist.images[1] && artist.images[1].url) || placeholder} url={artist.external_urls.spotify}></ArtistCard>
          </Grid>
        ))}
      </Grid>

      <SectionTitle text={"Albums"}></SectionTitle>

      <Grid container spacing={3} justifyContent="space-evenly">
        {albums.map && albums.map(album => (
          <Grid item xs={12} sm={6} md={3} key={album.id}>
            <AlbumCard title={album.name} artist={album.artists[0].name} imageURL={(album.images[1] && album.images[1].url) || placeholder} url={album.external_urls.spotify}></AlbumCard>
          </Grid>
        ))}
      </Grid>

    </div>
  );
}

export default App;
