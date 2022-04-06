//import create slice from redux toolkit
import { createSlice } from "@reduxjs/toolkit";

//create initial state
const initialState = {
    uris: [],
};

//create slice
const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addTrack: (state, action) => {
            state.uris.push(action.payload);
        },
        removeTrack: (state, action) => {
            state.uris = state.uris.filter((uri) => action.payload !== uri);
        },
        clearPlaylist: (state) => {
            state = initialState;
        },
    },
});

// export action creators for each case reducer function
export const { addTrack, removeTrack, clearPlaylist } = playlistSlice.actions;

//export reducer
export default playlistSlice.reducer;