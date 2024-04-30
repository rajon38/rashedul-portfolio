import {LogoutSuccess, LoginSuccess} from "../redux/rootSlice";

let store;

class SessionHelper {
    setStore(s) {
        store = s;
    }

    setToken(token) {
        localStorage.setItem("token", token);
        store.dispatch(LoginSuccess(token));
    }

    getToken() {
        const token = localStorage.getItem("token");
        return token;
    }

    setUserDetails(userDetails) {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }

    getUserDetails() {
        const userDetailsString = localStorage.getItem("userDetails");
        return JSON.parse(userDetailsString);
    }

    removeSessions = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userDetails");
        store.dispatch(LogoutSuccess());
        window.location.href = "/login";
    }

    isAuthenticated() {
        const token = this.getToken();
        return !!token;
    }
}

export const sessionHelper = new SessionHelper();
