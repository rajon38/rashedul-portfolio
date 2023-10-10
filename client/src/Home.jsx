import React, {Fragment, Suspense} from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Education from "./components/education/Education";
import LazyLoader from "./components/MasterLayout/LazyLoader";
import {Toaster} from "react-hot-toast";

const Home = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Header/>
                <Nav/>
                <About/>
                <Education/>
                <Experience/>
                <Services/>
                <Portfolio/>
                <Testimonial/>
                <Contact/>
                <Footer/>
                <Toaster />
            </Suspense>
        </Fragment>
    );
};

export default Home;