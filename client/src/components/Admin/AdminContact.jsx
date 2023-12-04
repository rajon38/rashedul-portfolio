import React from 'react';
import {useSelector} from "react-redux";
import './CSS/adminContact.css'
const AdminContact = () => {
    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const contactData = portfolioData && portfolioData.contact;
    return (
        <div>
            <h1 className="Title">Contact</h1>
            <div className='contact__container2'>
                {contactData && contactData.map((item,index)=>(
                <div key={index}>
                    <h2>{item.name}</h2>
                    <small>{item.email}</small>
                    <h3>{item.message}</h3>
                </div>
                    ))}
            </div>


        </div>
    );
};

export default AdminContact;