//import use state from react
//import use dispatch and use selector from react-redux
//import { createPlaylist, addTraksToPlaylist } from "./spotify";
//import { addTrack, removeTrack, clearPlaylist } from "../store/playlist";
//
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPlaylist as createPlaylistAPI, addTracksToPlaylist } from "./spotify";
import { addTrack, removeTrack, clearPlaylist } from "../store/playlist";

//make use playlist function to use in component
//make use playlist function
const usePlaylist = () => {
    const [isLoading, setLoading] = useState(false);
    const selectedTrack = useSelector((state) => state.playlist.uris);
    const dispatch = useDispatch();

    // make function to check selected track
    const checkSelected = (id) => {
        return selectedTrack.includes(id);
    };

    // make function to handle select
    const handleSelect = (id) => {
        const isSelected = checkSelected(id);
        if (!isSelected) {
            dispatch(addTrack(id));
        } else {
            dispatch(removeTrack(id));
        }
    };
    // make function to  create playlist
    const createPlaylist = async (token, userId, payload) => {
        setLoading(true);
        //create playlist
        return createPlaylistAPI(token, userId, payload).then((res) => {
            const { id: playlist_id } = res;
            //after playlist created, insert tracklist
            return addTracksToPlaylist(token, playlist_id, {
                uris: selectedTrack,
            }).then(() => {
                //after successfull, empty the tracklist
                dispatch(clearPlaylist());
                setLoading(false);
            });
        });
    };
    // return all function
    return {
        selectedTrack,
        checkSelected,
        handleSelect,
        createPlaylist,
        isLoading,
    };
};

//export use playlist
export { usePlaylist };