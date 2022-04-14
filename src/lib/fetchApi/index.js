import axios from "axios";
import config from "../config";

export const searchTrack = async (query, accessToken) => {
  const requestOptions = {
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
  }; 

  const response = await axios.get(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${query}`, requestOptions);

  return response.data;
  
}//fetch spotify track data and called in search-bar component

export const getUserProfile = async (accessToken) => {
  const requestOptions = {
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.get(`${config.SPOTIFY_BASE_URL}/me`, requestOptions);

  return response.data;
}//fetch user profile data and called in home

export const createPlaylist = async (accessToken, userId, { name, description }) => {
  const data = JSON.stringify({
    name,
    description,
    public: false,
    collaborative: false,
  })
  
  const requestOptions = {
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(
    `${config.SPOTIFY_BASE_URL}/users/${userId}/playlists`,
    data,
    requestOptions
  );

  return response.data;
}

export const addTracksToPlaylist = async (accessToken, playlistId, uris) => {
  const data = JSON.stringify({
    uris
  });

  const requestOptions = {
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(
    `${config.SPOTIFY_BASE_URL}/playlists/${playlistId}/tracks`,
    data,
    requestOptions
  );

  return response.data;
}