import React, {useRef} from 'react';
import './CSS/adminAbout.css'
import {useSelector} from "react-redux";
const AdminAbout = () => {
    const form = useRef();
    const state = useSelector(state => state.root);
    const { portfolioData } = state;
    const AboutData = portfolioData && portfolioData.about[0];
    const sendForm = (e) => {
        e.preventDefault();
    }

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };
    return (
        <div className='Title'>
            <h1>About</h1>
            <div >
                <form ref={form} onSubmit={sendForm}>
                    <input type="file" name="file"  placeholder="Your File" />
                    {AboutData.image && <img src={`${AboutData.image}`} alt="User" className='Img2'/>}
                    <textarea name="message" rows="7" value={AboutData.desc} placeholder="Your Message"/>
                    <div className="number">
                    <input type="number" min="0" value={AboutData.experience} onChange={preventMinus}  name="number" placeholder="Your Experience" />
                    <input type="number" min="0" value={AboutData.clients} onChange={preventMinus}  name="number" placeholder="Your Clients" />
                    <input type="number" min="0" value={AboutData.projects} onChange={preventMinus}  name="number" placeholder="Your Projects" />
                    </div>
                    <button type='submit' className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
};

export default AdminAbout;