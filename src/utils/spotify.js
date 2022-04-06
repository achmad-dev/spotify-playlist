//define spotify api base
const API_BASE = "https://api.spotify.com/v1";

//make a request to spotify api to get the user profile
const getProfile = (accessToken) => {
  return fetch(API_BASE + "/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

//make a request to spotify api to search for a track
const getSearchTrack = (accessToken, options) => {
    const params = new URLSearchParams(options).toString();
    return fetch(`${API_BASE}/search?${params}`, {
        headers: {
            Authorization: "Bearer " + accessToken,
        },
        }).then((res) => res.json());
    };
//make a request to spotify api to create a playlist
const createPlaylist = (accessToken, userId, payload) => {
    return fetch(`${API_BASE}/users/${userId}/playlists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(payload),
        }).then((res) => res.json());
    };

//make a request to spotify api to add tracks to a playlist
const addTraksToPlaylist = (accessToken, playlisId, payload) => {
    return fetch(`${API_BASE}/playlists/${playlisId}/tracks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(payload),
        }).then((res) => res.json());
    };
//make a request to spotify api to get the top tracks
const getTopTracks = (accessToken) => {
    const limit = 20;
    return fetch(API_BASE + `/me/top/tracks?limit=${limit}`, {
        headers: {
            Authorization: "Bearer " + accessToken,
        },
        }).then((res) => res.json());
    };
//export the functions
export {
    getTopTracks,
    getProfile,
    getSearchTrack,
    createPlaylist,
    addTraksToPlaylist,
};