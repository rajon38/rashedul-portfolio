import React from 'react';
import './education.css'
import {BsPatchCheckFill} from "react-icons/bs";
import {useSelector} from "react-redux";

const Education = () => {
    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const educationData = portfolioData && portfolioData.education[0];

    const academic = educationData && educationData.academic;
    const backend = educationData && educationData.backend;


    return (
        <section id='education'>
            <h5>What I Have</h5>
            <h2>My Education</h2>

            <div className="container education__container">
                <div className="education__frontend">
                    <h3>Academic</h3>
                    <div className="education__content">
                        {academic && academic.map((item, index)=>(
                            <article className="education__details" key={index}>
                                <BsPatchCheckFill className="education__details-icon"/>
                                <div>
                                    <h4>{item.title}</h4>
                                    <small className="text-white">{item.desc}</small>
                                    <small className="text-light">{item.duration}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/*end of frontend*/}

                <div className="education__backend">
                    <h3>Courses</h3>
                    <div className="education__content">
                        {backend && backend.map((item, index)=>(
                            <article className="education__details" key={index}>
                                <BsPatchCheckFill className="education__details-icon"/>
                                <div>
                                    <h4>{item.title}</h4>
                                    <small className="text-white">{item.desc}</small>
                                    <small className="text-light">{item.duration} months</small>
                                </div>
                            </article>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;