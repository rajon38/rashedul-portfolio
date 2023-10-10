import React from 'react';
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs";
import {useSelector} from "react-redux";

const Experience = () => {
    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const experienceData = portfolioData && portfolioData.experience[0];

    const frontend = experienceData && experienceData.frontend;
    const backend = experienceData && experienceData.backend;
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {frontend && frontend.map((item,index)=>(
                            <article className="experience__details" key={index}>
                                <BsPatchCheckFill className="experience__details-icon"/>
                                <div>
                                    <h4>{item.technology}</h4>
                                    <small className="text-light">{item.experienceLevel}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/*end of frontend*/}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {backend && backend.map((item,index)=>(
                            <article className="experience__details" key={index}>
                                <BsPatchCheckFill className="experience__details-icon"/>
                                <div>
                                    <h4>{item.technology}</h4>
                                    <small className="text-light">{item.experienceLevel}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;