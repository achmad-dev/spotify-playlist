const API_BASE = "https://api.spotify.com/v1";

const getProfile = (accessToken) => {
  return fetch(API_BASE + "/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

const getSearchTrack = (accessToken, options) => {
  const params = new URLSearchParams(options).toString();
  return fetch(`${API_BASE}/search?${params}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

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
export { getProfile, getSearchTrack, createPlaylist, addTraksToPlaylist };
