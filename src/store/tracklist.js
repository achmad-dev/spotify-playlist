import { createSlice } from "@reduxjs/toolkit";

//make initial state
const initialState = {
    lists: [],
};

//make tracklist slice
const tracklistSlice = createSlice({
    name: "tracks",
    initialState,
    reducers: {
        storeTracklist: (state, action) => {
            state.lists = action.payload;
        },
        clearList: (state) => {
            state = initialState;
        },
    },
});

//make and export action creators for each case reducer function
export const { storeTracklist, clearList } = tracklistSlice.actions;

//export reducer
export default tracklistSlice.reducer;