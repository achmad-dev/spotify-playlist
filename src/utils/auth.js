import {useSelector} from 'react-redux';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;

const Auth = () => {
    const { isAuthenticated, data, accessToken } = useSelector((state) => state.user);
    
    const generateRandomString = (length) => {
        let result = "";
        let characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    //make a function to redirect to spotify login API
    const redirect = () => {
        const url = "https://accounts.spotify.com/authorize";
        const scope =
            "user-read-private playlist-modify-private user-read-email user-top-read";
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
    }

    // make a function to decode hash param from URL callback
    const callback = () => {
        let hashParams = {};
        let e,
            r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ((e = r.exec(q))) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams.access_token && hashParams;
    }

    // return callback and redirect functions and isAuthenticated , accessToken and user data
    return { redirect, callback, isAuthenticated, accessToken, user: data };
}

export { Auth };
