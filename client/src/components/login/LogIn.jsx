import React, {useRef} from 'react';
import './login.css'

const LogIn = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    }
    return (
        <section id='login'>
            <h5>Update Your Resume</h5>
            <h2>Login</h2>
            <div className="container login__container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <button type='submit' className="btn btn-primary">Log In</button>
                </form>
            </div>
        </section>
    );
};

export default LogIn;