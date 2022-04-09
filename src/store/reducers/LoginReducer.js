import { createSlice } from "@reduxjs/toolkit"
import { getToken } from "../../storage/Storage";

export const initialState = {
    username: "",
    password: "",
    error: false,
    isloading: false,
    message: "",
    token: "",
    isAthunticated: false,
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers: {
        loginRequest: (state, action) => {
            state.isloading = true;
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.token = "";
            state.message = "";
            state.error = false;
            // state.isAthunticated = !!loadState();
            state.isAthunticated = !!getToken();
        },
        loginSuccess: (state, action) => {
            state.isloading = false;
            state.token = action.payload.token;
            state.message = action.payload.message;
            state.error = false;
            state.isAthunticated = !!getToken();
        },
        loginFailer: (state, action) => {
            state.isloading = false;
            state.token = "";
            state.message = action.payload.message;
            state.error = true;
            state.isAthunticated = !!!!getToken();
        },
        logOut: (state, action) => {
            state.isloading = false;
            state.token = "";
            state.message = action.payload;
            state.error = false;
            state.isAthunticated = !!!!getToken();
        }
    }
})

export const { loginRequest,  loginSuccess,  loginFailer, logOut } = loginSlice.actions;

export const selectUser = (state) => state.login.username;
export const selectPass = (state) => state.login.password;
export const selectToken = (state) => state.login.token;
export const selectAthunticated = (state) => state.login.isAthunticated;
export const selectIsloading = (state) => state.login.isloading;
export const selectError= (state) => state.login.error;

export default loginSlice.reducer;