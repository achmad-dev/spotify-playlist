import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken:'',
        isLogin : false,
    },
    reducers: {
        login: (state, action) => {
          state.accessToken = action.payload.accessToken;
          state.isLogin = true;
          state.user=action.payload.user
        }
      }
    })

export const { login } = authSlice.actions;

export default authSlice.reducer;