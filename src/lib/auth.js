const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;

// thank you https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

const generateRandomString = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const redirect = () => {
  const url = "https://accounts.spotify.com/authorize";
  const scope = "user-read-private playlist-modify-private user-read-email streaming user-read-email streaming user-read-email user-read-private user-read-playback-state";
  const state = generateRandomString(16);
  const paramsData = {
    response_type: "token",
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URL,
    state,
    scope,
  };
  const params = new URLSearchParams(paramsData).toString();
  //redirect...
  window.location = `${url}?${params}`;
};


const callback = () => {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams.access_token && hashParams;
};

export { redirect, callback };
