import React from 'react';
import './header.css';
import CTA from "./CTA";
// import ME from '../../assets/ME.jpg';
import HeaderSocials from "./HeaderSocials";
import { useSelector } from "react-redux";

const Header = () => {

    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const introData = portfolioData && portfolioData.intro;

    const intro = introData && introData[0];

    const fullName = intro && intro.fullName;
    const title = intro && intro.title;
    const imageBase64 = intro && intro.image; // Assuming intro.image is the base64 string

    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>{fullName || ''}</h1>
                <h5>{title || ''}</h5>
                <CTA/>
                <HeaderSocials/>

                <div className='me'>
                    {imageBase64 && <img src={`${imageBase64}`} alt="me" />}
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;
