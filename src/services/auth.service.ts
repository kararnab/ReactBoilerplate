import axios from "axios";
import { BASE_URL, URL } from "./Constants";

const register = (username: string, email: string, password: string) => {
    return axios
        .post(BASE_URL + URL.REGISTER, {
            username,
            email,
            password,
        });
};

const login = (username: string, password: string) => {
    return axios
        .post(BASE_URL + URL.LOGIN, {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};