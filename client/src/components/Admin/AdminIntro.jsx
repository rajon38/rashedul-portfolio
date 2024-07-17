import React, { useRef, useState } from 'react';
import './CSS/adminIntro.css';
import { useSelector, useDispatch } from 'react-redux';
import { ShowLoader, HideLoader, SetUserDetails } from "../../redux/rootSlice";
import axios from 'axios';

const AdminIntro = () => {
    const form = useRef();
    const state = useSelector(state => state.root);
    const dispatch = useDispatch();
    const { userDetails } = state;
    const AdminIntroData = userDetails && userDetails.intro ? userDetails.intro[0] : null;

    const BaseURL = process.env.REACT_APP_BASE_URL;

    const [errorMessage, setErrorMessage] = useState('');
    const [imageFile, setImageFile] = useState(null); // State to hold selected image file
    const [resumeFile, setResumeFile] = useState(null); // State to hold selected resume file

    const sendForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        // Check if imageFile is selected, otherwise use existing data
        if (imageFile) {
            formData.append('image', imageFile); // Append image file to formData
        } else if (AdminIntroData?.image) {
            formData.append('image', AdminIntroData.image); // Retain existing image data
        }

        // Check if resumeFile is selected, otherwise use existing data
        if (resumeFile) {
            formData.append('resume', resumeFile); // Append resume file to formData
        } else if (AdminIntroData?.resume) {
            formData.append('resume', AdminIntroData.resume); // Retain existing resume data
        }

        try {
            dispatch(ShowLoader());

            let response;
            if (AdminIntroData) {
                // Update existing intro
                response = await axios.post(`${BaseURL}/api/v1/introUpdate/${AdminIntroData._id}`, formData, {
                    headers: {
                        'token': state.token,
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } else {
                // Create new intro
                response = await axios.post(`${BaseURL}/api/v1/intro`, formData, {
                    headers: {
                        'token': state.token, 
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            dispatch(SetUserDetails(response.data));
            setErrorMessage('');
            form.current.reset()
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            dispatch(HideLoader());
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleResumeChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setResumeFile(file);
        }
    };

    return (
        <div className="Title">
            <h1>Intro</h1>
            <div>
                <form ref={form} onSubmit={sendForm}>
                    <input type="text" name="fullName" defaultValue={AdminIntroData?.fullName || ''} placeholder="Your Full Name" />
                    <input type="text" name="title" defaultValue={AdminIntroData?.title || ''} placeholder="Your Title" />
                    <label htmlFor="image">Select a picture:</label>
                    <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
                    {AdminIntroData?.image && <img src={`${BaseURL}/${AdminIntroData?.image}`} alt="User" className='Img'/>}
                    <label htmlFor="resume">Select a resume:</label>
                    <input type="file" name="resume" accept=".pdf" onChange={handleResumeChange} />
                    {AdminIntroData?.resume && (
                        <a href={`${BaseURL}/${AdminIntroData?.resume}`} target="_blank" rel="noopener noreferrer">
                            View Resume
                        </a>
                    )}
                    <button type="submit" className="btn btn-primary">
                        {AdminIntroData ? 'Update' : 'Create'}
                    </button>
                </form>
                {errorMessage && <div className="error">{errorMessage}</div>}
            </div>
        </div>
    );
};

export default AdminIntro;
