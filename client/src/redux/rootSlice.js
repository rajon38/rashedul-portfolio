import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        loading: false,
        portfolioData: null,
        reloadData: false,
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
    },
});

export default rootSlice.reducer;
export const { ShowLoader, HideLoader, SetPortfolioData, ReloadData } = rootSlice.actions;
