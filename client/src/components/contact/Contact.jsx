import React,{useRef} from 'react';
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import { RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import axios from "axios";
import {ErrorToast, SuccessToast} from "../../helper/FormHelper";

const BaseURL = 'http://localhost:9000/api/v1'



const Contact = () => {

    const form = useRef();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(form.current);
        const postData = {};

        formData.forEach((value, key) =>{
            postData[key] = value;
        });

        const requiredFields = ['name', 'email', 'message'];
        const missingFields = requiredFields.filter(field => !postData[field]);

        if (missingFields.length > 0) {
            alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
            return;
        }

        const res = await axios.post(`${BaseURL}/contact`,postData)
        if (res.data.status === 'success'){
            SuccessToast('Message sent successfully')
            form.current.reset();
        }else {
            ErrorToast('Failed to send message. Please try again later.')
        }
    }

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>rashedul.rajon@gmail.com</h5>
                        <a href='mailto:rashedul.rajon@gmail.com' target="_blank"  rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Rashedul Islam</h5>
                        <a href='https://m.me/rashedulislam.rajon' target="_blank"  rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>Click on the link</h5>
                        <a href='https://api.whatsapp.com/send?phone=+8801316422931' target="_blank"  rel="noreferrer">Send a message</a>
                    </article>
                </div>
            {/*    End of contact options  */}
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required/>
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;