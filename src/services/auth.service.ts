import axios from 'axios';
import { BASE_URL, URL } from './Constants';

export const register = (username: string, email: string, password: string) => {
    return axios
        .post(BASE_URL + URL.REGISTER, {
            username,
            email,
            password,
        });
};

export const login = (username: string, password: string) => {
    return axios
        .post(BASE_URL + URL.LOGIN, {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch((error) => {
            return processAPIError(error);
        });
};

export function processAPIError(error: Error) {
    if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return Promise.reject(error.message);
    } else {
        console.log('unexpected error: ', error);
        return Promise.reject('An unexpected error occurred');
    }
}

export const logout = () => {
    localStorage.removeItem('user');
};