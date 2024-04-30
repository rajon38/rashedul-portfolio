import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        loading: false,
        portfolioData: null,
        reloadData: false,
        userDetails: null,
        isAuthenticated: !!localStorage.getItem("token"), // Check if token exists in localStorage
        token: localStorage.getItem("token"),
    },
    reducers: {
        ShowLoader: (state) => {
            state.loading = true;
        },
        HideLoader: (state) => {
            state.loading = false;
        },
        SetPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
        },
        ReloadData: (state, action) => {
            state.reloadData = action.payload;
        },
        LoginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload;
            localStorage.setItem("token", action.payload); // Store token in localStorage
        },
        LogoutSuccess: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem("token"); // Remove token from localStorage
        },
        SetUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    },
});

export default rootSlice.reducer;
export const { ShowLoader, HideLoader, SetPortfolioData, ReloadData,LoginSuccess, LogoutSuccess,SetUserDetails} = rootSlice.actions;
