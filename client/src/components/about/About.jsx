import React from 'react';
import './about.css'
//import ME from '../../assets/about.jpeg'
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import {useSelector} from "react-redux";

const About = () => {
    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const aboutData = portfolioData && portfolioData.about;

    const about = aboutData && aboutData[0]

    const desc = about && about.desc
    const experience = about && about.experience
    const clients = about && about.clients
    const projects = about && about.projects
    const image = about && about.image;
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={image} alt="me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>{experience}+ Years</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>{clients}+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>{projects}+ completed</small>
                        </article>
                    </div>

                    <p>{desc}</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;