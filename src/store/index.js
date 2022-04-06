//make store with configureStore
import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import playlist from "./playlist";
import tracks from "./tracklist";

//make store function with configureStore
export default configureStore({
    reducer: {
        user,
        playlist,
        tracks,
    },
});