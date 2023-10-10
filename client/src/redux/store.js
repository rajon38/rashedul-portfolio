import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import rootSlice from "./rootSlice";

const rootReducer = combineReducers({
    root: rootSlice,
    // Add other reducers if needed
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
