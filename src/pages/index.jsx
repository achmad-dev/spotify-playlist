import { useEffect, useState } from "react";
import { callback } from "../lib/auth";
import Playlist from "../components/playlist";
import Navbar from "../components/navbar";
import initData from "../data/playlist";
import Main from "../layout/main";
import setToken from '../store/reduxSlice';
import { getProfile, getSearchTrack } from "../lib/spotify";
import {useDispatch, useSelector} from 'react-redux';
const Index = () => {
  const [trackList, setTrackList] = useState(initData);
  const [isLoading, setIsloading] = useState(false);
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = callback();
    if (payload) {
      dispatch(setToken(payload));
      setAuth(payload);
      getProfile(payload.access_token).then((res) => {
        setUserData(res);
      });
    }
  }, [dispatch, callback]);
  const handleSearch = (query) => {
    const options = {
      q: query,
      type: "track",
      limit: 20,
    };
    setIsloading(true);
    getSearchTrack(auth.access_token, options).then((res) => {
      setTrackList(res.tracks.items);
      setIsloading(false);
    });
  };
  return (
    <>
      <Navbar
        userData={{ ...userData, ...auth }}
        isLoading={isLoading}
        handleSearch={handleSearch}
      />
      <Main>
        <h1 style={{ fontSize: "44px" }}>Select tracks</h1>
        <Playlist data={trackList} userData={{ ...userData, ...auth }} />
      </Main>
    </>
  );
};

export default Index;
