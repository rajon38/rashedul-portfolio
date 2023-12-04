import React, {Fragment, Suspense} from 'react';
import './CSS/dashboard.css'

import {Tabs} from 'antd'
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminEducation from "./AdminEducation";
import AdminExperience from "./AdminExperience";
import AdminPortfolio from "./AdminPortfolio";
import AdminTestimonial from "./AdminTestimonial";
import AdminContact from "./AdminContact";
import LazyLoader from "../MasterLayout/LazyLoader";
const {TabPane} = Tabs
const Dashboard = () => {
    return (
        <Fragment>
        <div className='container'>
            <div className="admin__container">
                <div className="admin__title">
                    <h1>Portfolio Admin</h1>
                </div>
                <h3
                    onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/login";
                    }}
                >
                    Logout
                </h3>
            </div>

            <Suspense fallback={<LazyLoader/>}>
            <div className="tabs">
                <Tabs defaultActiveKey='1'>
                    <TabPane tab='Intro' key='1'>
                        <AdminIntro/>
                    </TabPane>
                    <TabPane tab='About' key='2'>
                        <AdminAbout/>
                    </TabPane>
                    <TabPane tab='Education' key='3'>
                        <AdminEducation/>
                    </TabPane>
                    <TabPane tab='Experience' key='4'>
                        <AdminExperience/>
                    </TabPane>
                    <TabPane tab='Portfolio' key='5'>
                        <AdminPortfolio/>
                    </TabPane>
                    <TabPane tab='Testimonisl' key='6'>
                        <AdminTestimonial/>
                    </TabPane>
                    <TabPane tab='Contact' key='7'>
                        <AdminContact/>
                    </TabPane>
                </Tabs>
            </div>
            </Suspense>
        </div>
        </Fragment>
    );
};

export default Dashboard;