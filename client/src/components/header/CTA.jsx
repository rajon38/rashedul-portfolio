import React from 'react';
// import CV from '../../assets/Cv-Rashedul-Islam-Web-Developer.pdf'
import {useSelector} from "react-redux";

const CTA = () => {
    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const introData = portfolioData && portfolioData.intro;

    // Assuming introData is an array with one object
    const intro = introData && introData[0];

    const resume = intro && intro.resume
    return (
        <div className='cta'>
            <a href={resume || ''} download className='btn'>Download CV</a>
            <a href="/contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    );
};

export default CTA;