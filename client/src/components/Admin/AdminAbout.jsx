import React, {useRef} from 'react';
import './CSS/adminAbout.css'
const AdminAbout = () => {
    const form = useRef();

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
                    <input type="file" name="file" placeholder="Your File" />
                    <textarea name="message" rows="7" placeholder="Your Message"/>
                    <div className="number">
                    <input type="number" min="0" onChange={preventMinus}  name="number" placeholder="Your Experience" />
                    <input type="number" min="0" onChange={preventMinus}  name="number" placeholder="Your Clients" />
                    <input type="number" min="0" onChange={preventMinus}  name="number" placeholder="Your Projects" />
                    </div>
                    <button type='submit' className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
};

export default AdminAbout;