import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import config from "../../lib/config";
import { login } from "../../reducer/authReducer";
import Button from '@mui/material/Button';
import { Div, backgroundColor} from "./button";

const Login = () => {
  const dispatch = useDispatch();

  const history = useHistory();

    const generateSpotifyLinkAuthorize=()=>{

        const state = Date.now().toString()
        const redirect_url = process.env.REACT_APP_REDIRECT_URL;
        const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        return`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirect_url}=${state}&scope=${config.SPOTIFY_SCOPE}`
      }
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
              ).then(
                (data) => data.json()
                ).catch(err => {
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
    return(
    <div>
      <div className={Div}>
        <h1>Spotify Playlist Creator</h1>
      </div>
      <div className={Div}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DCf4sykvys0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className={backgroundColor}>
        <Button variant="contained" href={generateSpotifyLinkAuthorize()}>
         Login with Spotify
        </Button>
      </div>
    </div>
    )
}
export default Login;
