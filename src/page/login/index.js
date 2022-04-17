import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import config from "../../lib/config";
import { login } from "../../reducer/authReducer";
import Button from '@mui/material/Button';
import { Div } from "./button";
import { backgroundColor, spotifyColor } from "./button";

const Login = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    const accessTokenParams = new URLSearchParams(window.location.hash).get(
      "#access_token"
    );

    if (accessTokenParams !== null) {
      const setUserProfile = async () => {
        try {
          const requestOptions = {
            headers: {
              Authorization: "Bearer " + accessTokenParams,
              "Content-Type": "application/json",
            },
          };

          const response = await fetch(
            `${config.SPOTIFY_BASE_URL}/me`,
            requestOptions
          ).then((data) => data.json()).catch(err => {
            console.log(err)
            response.sendStatus(400)});
          dispatch(
            login({
              accessToken: accessTokenParams,
              user: response,
            })
          );
          history.push("/create-playlist");
        } catch (e) {
          alert(e);
        }
      };

      setUserProfile();
    }
  }, [dispatch,history]);

    const generateSpotifyLinkAuthorize=()=>{

        const state = Date.now().toString()
        const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
        return`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/redirect&state=${state}&scope=${config.SPOTIFY_SCOPE}`
      }
    return(
    <div className={spotifyColor}>
      <Div>
        <h1>Spotify Playlist Creator</h1>
      </Div>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/DCf4sykvys0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    <Div className={backgroundColor}>
        <Button variant="contained" href={generateSpotifyLinkAuthorize()}>
         Login
        </Button>
      </Div>
    </div>
    )
}
export default Login;
