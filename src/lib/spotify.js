const Api_Base = 'https://api.spotify.com/v1';

const getProfile = (accessToken) => {
  return fetch(Api_Base + '/me', {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  }).then((respond) => respond.json());
};

const getSearchTrack = (accessToken, options) => {
  const params = new URLSearchParams(options).toString();
  return fetch(`${Api_Base}/search?${params}`, {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  }).then((respond) => respond.json());
}

export {getProfile, getSearchTrack};
