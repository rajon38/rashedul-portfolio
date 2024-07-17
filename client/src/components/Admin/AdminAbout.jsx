import React, { useRef } from 'react';
import './CSS/adminAbout.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AdminAbout = () => {
    const form = useRef();
    const BaseURL = process.env.REACT_APP_BASE_URL;

    const state = useSelector(state => state.root);
    const { userDetails } = state;
    const AboutData = userDetails && userDetails.about && userDetails.about.length > 0 ? userDetails.about[0] : null;

    const isUpdating = !!AboutData; // Check if there is existing AboutData to determine if it's an update operation

    const sendForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'token': state.token,
                }
            };

            let response;

            if (isUpdating) {
                // Update existing about entry
                response = await axios.post(`${BaseURL}/api/v1/aboutUpdate/${AboutData._id}`, formData, config);
            } else {
                // Create new about entry
                response = await axios.post(`${BaseURL}/api/v1/about`, formData, config);
            }

            console.log('Server Response:', response.data); // Log server response (for debugging)
            // Optionally dispatch an action to update Redux state with new data if needed

            // Reset form after successful submission
            form.current.reset();
        } catch (error) {
            console.error('Error:', error);
            // Handle error, show error message, etc.
        }
    };

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    return (
        <div className='Title'>
            <h1>About</h1>
            <div>
                <form ref={form} onSubmit={sendForm}>
                    <input type="file" name="image" accept="image/*" placeholder="Your File" />
                    {AboutData && AboutData.image && (
                        <img src={`${BaseURL}/${AboutData.image}`} alt="User" className='Img2' />
                    )}
                    <textarea name="desc" rows="7" defaultValue={AboutData ? AboutData.desc : ''} placeholder="Your Message" />
                    <div className="number">
                        <input type="number" min="0" defaultValue={AboutData ? AboutData.experience : ''} onChange={preventMinus} name="experience" placeholder="Your Experience" />
                        <input type="number" min="0" defaultValue={AboutData ? AboutData.clients : ''} onChange={preventMinus} name="clients" placeholder="Your Clients" />
                        <input type="number" min="0" defaultValue={AboutData ? AboutData.projects : ''} onChange={preventMinus} name="projects" placeholder="Your Projects" />
                    </div>
                    <button type='submit' className="btn btn-primary">
                        {isUpdating ? 'Update' : 'Create'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminAbout;
