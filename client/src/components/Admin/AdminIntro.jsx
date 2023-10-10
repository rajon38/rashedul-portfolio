import React, {useRef} from 'react';
import './CSS/adminIntro.css'

const AdminIntro = () => {
    const form = useRef();

    const sendForm = (e) => {
        e.preventDefault();
    }
    return (
        <div className="Title">
            <h1>Intro</h1>
            <div>
                <form ref={form} onSubmit={sendForm}>
                    <input type="text" name="name" placeholder="Your Full Name"/>
                    <input type="text" name="title" placeholder="Your Title"/>
                    <label htmlFor="file">Select a picture:</label>
                    <input type="file" name="file" placeholder="Your File" />
                    <label htmlFor="file">Select a resume:</label>
                    <input type="file" name="file" placeholder="Your File" />
                    <button type='submit' className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
};

export default AdminIntro;