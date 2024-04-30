import React, {useRef, useState} from 'react';
import './CSS/adminIntro.css'
import {useSelector} from "react-redux";

const AdminIntro = () => {
    const form = useRef();
    const state = useSelector(state => state.root)
    const { userDetails } = state;
    const AdminIntroData = userDetails && userDetails.intro[0];


    const [imageFileName, setImageFileName] = useState('');

    const sendForm = (e) => {
        e.preventDefault();
    }


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFileName(file.name);
        }
    };

    return (
        <div className="Title">
            <h1>Intro</h1>
            <div>
                <form ref={form} onSubmit={sendForm}>
                    <input type="text" name="name" value={AdminIntroData?.fullName} placeholder="Your Full Name" />
                    <input type="text" name="title" value={AdminIntroData?.title} placeholder="Your Title" />
                    <label htmlFor="image">Select a picture:</label>
                    <input type="file" name="image" accept="image/*" onChange={handleImageChange} />

                    {AdminIntroData?.image && <img src={`${AdminIntroData?.image}`} alt="User" className='Img'/>}

                    <label htmlFor="resume">Select a resume:</label>
                    <input type="file" name="resume" accept=".pdf" />

                    {AdminIntroData?.resume && (
                        <a href={`${AdminIntroData?.resume}`} target="_blank" rel="noopener noreferrer">
                            View Resume
                        </a>
                    )}
                    <button type='submit' className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
};

export default AdminIntro;