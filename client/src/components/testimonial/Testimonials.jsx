import React from 'react';
import './testimonial.css'
// import AVTR1 from '../../assets/testimonial1.png'
// import AVTR2 from '../../assets/testimonial2.png'
// import AVTR3 from '../../assets/testimonial3.png'

// core version + navigation, pagination modules:
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import {useSelector} from "react-redux";
//demo data
// const data = [
//     {
//         avatar:AVTR1,
//         name: 'Enjel Toranto',
//         review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
//     },
//     {
//         avatar:AVTR2,
//         name: 'Tina Lowren',
//         review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
//     },
//     {
//         avatar:AVTR3,
//         name: 'Mitu White',
//         review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
//     }
// ]
const Testimonials = () => {
    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const testimonialData = portfolioData && portfolioData.testimonial;

    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
            >
                {testimonialData && testimonialData.map((item, index)=>(
                    <SwiperSlide className="testimonial" key={index}>
                        <div className="client__avatar">
                            <img src={item.image} alt="Avatar" />
                        </div>
                        <h5 className="client__name">{item.name}</h5>
                        <small className="client__review">{item.review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;