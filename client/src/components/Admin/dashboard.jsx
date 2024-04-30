import React, { Fragment, Suspense, useEffect } from 'react';
import './CSS/dashboard.css';
import { Tabs } from 'antd';
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminEducation from "./AdminEducation";
import AdminExperience from "./AdminExperience";
import AdminPortfolio from "./AdminPortfolio";
import AdminTestimonial from "./AdminTestimonial";
import AdminContact from "./AdminContact";
import LazyLoader from "../MasterLayout/LazyLoader";
import { useNavigate } from "react-router-dom";
import { sessionHelper } from "../../helper/SessionHelper";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoader, HideLoader, SetUserDetails } from "../../redux/rootSlice";
import axios from "axios";


const BaseURL = 'http://localhost:9000/api/v1';

const { TabPane } = Tabs;

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userDetails, loading } = useSelector(state => state.root);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                dispatch(ShowLoader());
                const token = sessionHelper.getToken();
                if (token) {
                    const response = await axios.get(`${BaseURL}/userDetails`, {
                        headers: {
                            token: `${token}` // Attach token to the request headers
                        }
                    });
                    dispatch(SetUserDetails(response.data));
                }
                dispatch(HideLoader());
            } catch (err) {
                dispatch(HideLoader());
                console.error(err);
            }
        };

        fetchUserDetails();
    }, [dispatch]);

    const handleLogout = () => {
        sessionHelper.removeSessions(); // Clear user session
        navigate("/login"); // Redirect to login page
    };

    return (
        <Fragment>
            <div className='container'>
                <div className="admin__container">
                    <div className="admin__title">
                        <h1>Portfolio Admin</h1>
                    </div>
                    <h3 onClick={handleLogout}>
                        Logout
                    </h3>
                </div>

                <Suspense fallback={<LazyLoader />}>
                    <div className="tabs">
                        <Tabs defaultActiveKey='1'>
                            <TabPane tab='Intro' key='1'>
                                {loading ? (
                                    <LazyLoader />
                                ) : (
                                    <AdminIntro userDetails={userDetails} />
                                )}
                            </TabPane>
                            <TabPane tab='About' key='2'>
                                {loading ? (
                                    <LazyLoader />
                                ) : (
                                    <AdminAbout userDetails={userDetails} />
                                )}
                            </TabPane>
                            <TabPane tab='Education' key='3'>
                                {loading ? (
                                    <LazyLoader />
                                ) : (
                                    <AdminEducation userDetails={userDetails} />
                                )}
                            </TabPane>
                            <TabPane tab='Experience' key='4'>
                                {loading ? (
                                    <LazyLoader />
                                ) : (
                                    <AdminExperience userDetails={userDetails} />
                                )}
                            </TabPane>
                            <TabPane tab='Portfolio' key='5'>
                                {loading ? (
                                    <LazyLoader />
                                ) : (
                                    <AdminPortfolio userDetails={userDetails} />
                                )}
                            </TabPane>
                            <TabPane tab='Testimonial' key='6'>
                                {loading ? (
                                    <LazyLoader />
                                ) : (
                                    <AdminTestimonial userDetails={userDetails} />
                                )}
                            </TabPane>
                            <TabPane tab='Contact' key='7'>
                                {loading ? (
                                    <LazyLoader />
                                ) : (
                                    <AdminContact userDetails={userDetails} />
                                )}
                            </TabPane>
                        </Tabs>
                    </div>
                </Suspense>
            </div>
        </Fragment>
    );
};

export default Dashboard;
