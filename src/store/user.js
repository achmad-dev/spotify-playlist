//make user slice with createSlice
import { createSlice } from "@reduxjs/toolkit";

//make initial state
const initialState = {
    isAuthenticated: false,
    accessToken: undefined,
    data: {},
};

//make user slice for user reducer
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.accessToken = action.payload;
        },
        storeUserData: (state, action) => {
            state.data = action.payload;
        },
        logout: (state) => {
            state = initialState;
        },
    },
});

//make and export action creators for each case reducer function
export const { login, storeUserData, logout } = userSlice.actions;

//export reducer
export default userSlice.reducer;