import React from 'react';
import './portfolio.css'
import {useSelector} from "react-redux";
// import IMG1 from "../../assets/work1.jpg"
// import IMG2 from "../../assets/work2.jpg"
// import IMG3 from "../../assets/work3.jpg"
// import IMG4 from "../../assets/work4.jpg"
// import IMG5 from "../../assets/work5.jpg"

//dummy Data
// const data =[
//     {
//         id:1,
//         image: IMG1,
//         title: 'Crypto Currency Dashboard & Financial Visualization',
//         github: 'https://github.com',
//         demo: 'https://google.com'
//     },
//     {
//         id:2,
//         image: IMG2,
//         title: 'Crypto Currency Dashboard & Financial Visualization',
//         github: 'https://github.com',
//         demo: 'https://google.com'
//     },
//     {
//         id:3,
//         image: IMG3,
//         title: 'Crypto Currency Dashboard & Financial Visualization',
//         github: 'https://github.com',
//         demo: 'https://google.com'
//     },
//     {
//         id:4,
//         image: IMG4,
//         title: 'Crypto Currency Dashboard & Financial Visualization',
//         github: 'https://github.com',
//         demo: 'https://google.com'
//     },
//     {
//         id:5,
//         image: IMG5,
//         title: 'Crypto Currency Dashboard & Financial Visualization',
//         github: 'https://github.com',
//         demo: 'https://google.com'
//     }
// ]
const Portfolio = () => {
    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const PortfolioData = portfolioData && portfolioData.portfolio;



    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {PortfolioData && PortfolioData.map((item, index) => (
                    <article key={index} className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={item.image} alt={item.title}/>
                    </div>
                    <h3>{item.title}</h3>
                    <div className="portfolio__item-cta">
                        <a href={item.github} className="btn" target="_blank"  rel="noreferrer">Github</a>
                        <a href={item.demo} className="btn btn-primary" target="_blank"  rel="noreferrer">Live Demo</a>
                        </div>
                    </article>
                    ))
                }
            </div>
        </section>
    );
};

export default Portfolio;