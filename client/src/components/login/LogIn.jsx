import React, { useRef, useState } from 'react';
import './login.css';
import axios from "axios";
import {HideLoader, ShowLoader, LoginSuccess, SetUserDetails} from "../../redux/rootSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sessionHelper } from "../../helper/SessionHelper";
import {ErrorToast, SuccessToast} from "../../helper/FormHelper";

const BaseURL = 'http://localhost:9000/api/v1';

const LogIn = () => {
    const form = useRef();
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const login = async (event) => {
        event.preventDefault();
        dispatch(ShowLoader());

        try {
            const response = await axios.post(`${BaseURL}/login`, user);
            const { token } = response.data;

            if (token) {
                dispatch(LoginSuccess(token));
                sessionHelper.setToken(token); // Store token in localStorage

                // Fetch userDetails from /userDetails endpoint
                const userDetailsResponse = await axios.get(`${BaseURL}/userDetails`, {
                    headers: {
                        token: `${token}` // Attach token to the request headers
                    }
                });
                const userDetails= userDetailsResponse.data;

                if (userDetails) {
                    dispatch(SetUserDetails(userDetails)); // Update userDetails in redux state
                    sessionHelper.setUserDetails(userDetails); // Store userDetails in localStorage
                }
                dispatch(HideLoader());
                navigate("/admin");
                SuccessToast("Login successful");
            } else {
                throw new Error("Login Failed");
            }
        } catch (error) {
            dispatch(HideLoader());
            ErrorToast(error.response?.data?.message || "Login failed"); // Display error message
            navigate("/login");
        }
    };

    return (
        <section id='login'>
            <h5>Update Your Resume</h5>
            <h2>Login</h2>
            <div className="container login__container">
                <form ref={form} onSubmit={login}>
                    <input
                        type="text"
                        value={user.username}
                        onChange={handleChange}
                        name="username"
                        placeholder="Your Username"
                        required
                    />
                    <input
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                        name="password"
                        placeholder="Your Password"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Log In
                    </button>
                </form>
            </div>
        </section>
    );
};

export default LogIn;
