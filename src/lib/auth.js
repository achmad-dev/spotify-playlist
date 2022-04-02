const ClientId = process.env.REACT_APP_CLIENT_ID;
const RedirectUrl = process.env.REACT_APP_REDIRECT_URL;

const generateRandomString = (length) => {
  let result = "";
  let characters =     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floot(Math.random() * charactersLength));
  }
  return result;
}


const redirect = () => {
  const scope = "user-read-private user-read-email";
  const state = generateRandomString(16);
  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += `&client_id=${encodeURIComponent(ClientId)}`;
  url += `&scope=${encodeURIComponent(scope)}`;
  url += `&redirect_uri=${encodeURIComponent(RedirectUrl)}`;
  url += `&state=${encodeURIComponent(state)}`;
  //redirect...
  window.location = url;
};

const callback = () => {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  console.log(hashParams);
  return hashParams.access_token && hashParams;
};

export { redirect, callback };
