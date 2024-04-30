import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home.jsx';
import LogIn from './components/login/LogIn';
import Admin from './components/Admin/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoader, ReloadData, ShowLoader, SetPortfolioData, SetUserDetails } from './redux/rootSlice';
import FullscreenLoader from './components/MasterLayout/FullscreenLoader';
import axios from "axios";
import { sessionHelper } from "./helper/SessionHelper";
import { LoginSuccess, LogoutSuccess } from './redux/rootSlice';

const BaseURL = 'http://localhost:9000/api/v1';

const App = () => {
    const state = useSelector(state => state.root);
    const { loading, isAuthenticated } = state;
    const dispatch = useDispatch();

    const fetchPortfolioData = async () => {
        try {
            dispatch(ShowLoader());
            const response = await axios.get(`${BaseURL}/`);
            dispatch(SetPortfolioData(response.data));
            dispatch(ReloadData(false));
            dispatch(HideLoader());
        } catch (err) {
            dispatch(HideLoader());
            console.error(err);
        }
    };

    // const fetchUserDetails = async () => {
    //     try {
    //         dispatch(ShowLoader());
    //         const response = await axios.get(`${BaseURL}/userDetails`);
    //         dispatch(SetUserDetails(response.data));
    //         dispatch(HideLoader());
    //     } catch (err) {
    //         dispatch(HideLoader());
    //         console.error(err);
    //     }
    // };

    useEffect(() => {
        const fetchDataIfNeeded = async () => {
            // if (window.location.pathname === '/') {
                await fetchPortfolioData();
            // } else if (window.location.pathname === '/admin') {
            //     await fetchUserDetails();
            // }
        };

        fetchDataIfNeeded();
    }, []);

    // Check authentication and set Redux state
    useEffect(() => {
        const token = sessionHelper.getToken();
        if (token) {
            dispatch(LoginSuccess(token));
        } else {
            dispatch(LogoutSuccess());
        }
    }, [dispatch]);

    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LogIn />} />
                    {/* Protected route for Admin after successful login */}
                    <Route path="/admin" element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
            {loading ? <FullscreenLoader /> : null}
        </Fragment>
    );
};

export default App;
