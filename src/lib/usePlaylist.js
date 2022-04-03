import { useState } from "react";
import {
  createPlaylist as createPlaylistAPI,
  addTraksToPlaylist,
} from "./spotify";
//TODO: use context API
const usePlaylist = () => {
  const [selectedTrack, setSelectedTrack] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const addTrack = (id) => {
    setSelectedTrack([...selectedTrack, id]);
  };

  const removeTrack = (id) => {
    const temp = [...selectedTrack];
    const idx = temp.indexOf(id);
    if (idx !== -1) {
      temp.splice(idx, 1);
      setSelectedTrack(temp);
    }
  };

  const checkSelected = (id) => {
    return selectedTrack.includes(id);
  };

  const handleSelect = (id) => {
    const isSelected = checkSelected(id);
    if (!isSelected) {
      addTrack(id);
    } else {
      removeTrack(id);
    }
  };

  const createPlaylist = (token, userId, payload) => {
    setLoading(true);
    //create playlist
    return createPlaylistAPI(token, userId, payload).then((res) => {
      const { id: playlist_id } = res;
      //after playlist created, insert tracklist
      return addTraksToPlaylist(token, playlist_id, {
        uris: selectedTrack,
      }).then(() => {
        //after successfull, empty the tracklist
        setSelectedTrack([]);
        setLoading(false);
      });
    });
  };

  return {
    selectedTrack,
    createPlaylist,
    addTrack,
    removeTrack,
    checkSelected,
    handleSelect,
    isLoading,
  };
};
export { usePlaylist };
