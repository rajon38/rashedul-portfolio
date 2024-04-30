import axios from "axios";
import store from "../redux/store";
import { ShowLoader, HideLoader, LoginSuccess, SetUserDetails } from "../redux/rootSlice";
import { sessionHelper } from "../helper/SessionHelper";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";

const BaseURL = 'http://localhost:9000/api/v1';

export const LoginRequest = async (username, password) => {
    try {
        store.dispatch(ShowLoader());
        debugger;
        const response = await axios.post(`${BaseURL}/login`, {
            username,
            password,
        });
        debugger;

        if (response.data.success) {
            debugger;
            const { token } = response.data;
            sessionHelper.setToken(token);
            store.dispatch(LoginSuccess(token));
            debugger;
            await UserDetails(); // Fetch user details after successful login
            SuccessToast("Login Success");
            store.dispatch(HideLoader());
            window.location.href = "/admin";
        } else {
            ErrorToast(response.data.message || "Invalid Email or Password");
            store.dispatch(HideLoader());
        }
    } catch (error) {
        store.dispatch(HideLoader());
        ErrorToast(error.message);
    }
};

export const UserDetails = async () => {
    try {
        const token = sessionHelper.getToken();
        if (token) {
            const userDetailsResponse = await axios.get(`${BaseURL}/userDetails`, {
                headers: {
                    token: `${token}`
                }
            });
            const userDetails = userDetailsResponse.data;
            sessionHelper.setUserDetails(userDetails);
            store.dispatch(SetUserDetails(userDetails));
            debugger;
        }
    } catch (error) {
        console.error("Error retrieving user details:", error);
    }
};
