import React, {Fragment, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import LogIn from './components/login/LogIn';
import Admin from './components/Admin/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoader, ReloadData, ShowLoader, SetPortfolioData } from './redux/rootSlice';
import FullscreenLoader from './components/MasterLayout/FullscreenLoader';
import axios from "axios";
const BaseURL = 'http://localhost:9000/api/v1'

const App = () => {
    const state = useSelector(state => state.root);
    const {loading, portfolioData, reloadData } = state;
    const dispatch = useDispatch();

    const fetchData = async () => {
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

    useEffect(() => {
        const fetchDataIfNeeded = async () => {
            if (!portfolioData || reloadData) {
                await fetchData();
            }
        };

        fetchDataIfNeeded();
    }, [portfolioData, reloadData]);


    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
            {loading ? <FullscreenLoader /> : null}
        </Fragment>
    );
};

export default App;
