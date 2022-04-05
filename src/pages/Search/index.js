import { useEffect, useState } from "react";
import axios from 'axios';
import List from "../../components/hw3/Track/List"
import SpotifyPlayer from 'react-spotify-web-playback';


function SearchPage() {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const BASE_URL = "https://api.spotify.com/v1"
    const SCOPE = 'playlist-modify-private'
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [results, setResults] = useState([])
    const [isDataExist, setIsDataExist] = useState(false);
    const [selectedMusic, setSelectedMusic] = useState({
    'id': [],
    'tracks': [],
  });


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")


        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchTracks = async (e) => {
        e.preventDefault()
        const { data } = await axios.get(`${BASE_URL}/search`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })

        setResults(data.tracks.items)
        setIsDataExist(true);
    }

    const selectMusic = (data) => {
    const tempArrMusic = [...selectedMusic.tracks, data];
    const tempArrMusicId = [...selectedMusic.id, data.uri];
    setSelectedMusic({
      'id' : tempArrMusicId,
      'tracks' : tempArrMusic,
    });
  }

  const deselectMusic = (data) => {
    const index = selectedMusic.id.indexOf(data.uri);

    const tempArrMusic = selectedMusic.tracks;
    tempArrMusic.splice(index, 1);
    const tempArrMusicId = selectedMusic.id;
    tempArrMusicId.splice(index, 1);

    setSelectedMusic({
      'id' : tempArrMusicId,
      'tracks' : tempArrMusic,
    });
  }


    const renderTracks = () => {
        return results.map((data) => (
            <List
                data={data}
                key={data.uri}
                title={data.name}
                img={data.album.images[0].url}
                artists={data.artists[0].name}
                album={data.album.name}
                <SpotifyPlayer token={token} uris={data.uri} />

            />
        ))
    }

    return (
        <div>
            <div className="auth-log">
                {!token ?

                    <a className="log" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login
                        to Spotify</a>
                    : <button className="log" onClick={logout}>Logout</button>}

                {token ?
                    <form className='search' onSubmit={searchTracks}>
                        <input className='search' type="text" onChange={e => setSearchKey(e.target.value)} />
                        <button className='searchButton' type={"submit"}>Search</button>
                    </form>

                    : <div></div>
                }

                <div className="show-search">
                    <h3>
                            {renderTracks()}
                    </h3>
                </div>
                <div className='musics-wrapper'>
        {
          selectedMusic.tracks.map((music) => {
            return <List key={music.uri} data={music} select={selectMusic} deselect={deselectMusic} isSelected={true}/>
          })
        }
        {isDataExist &&
          results
          .filter((music) => {
            return !selectedMusic.id.includes(music.uri);
          })
          .map((music) => {
            return <List key={music.uri} data={music} select={selectMusic} deselect={deselectMusic} isSelected={false}/>
          })
        }
      </div>
            </div>
        </div>
    );
}

export default SearchPage;
