import axios from 'axios';
import { BASE_URL, URL } from './Constants';
import { processAPIError } from './util';

class AuthService {
    register(username: string, email: string, password: string) {
        return axios
            .post(BASE_URL + URL.REGISTER, {
                username,
                email,
                password,
            })
            .catch((error) => {
                return processAPIError(error);
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    async login(username: string, password: string) {

        const dummyLogin = {
            authKey: '1232141dfsa4223',
            user: {
                name: 'Arnab Kar',
                phone: '9876543210'
            }
        };
        return dummyLogin;

        //TODO:
        // try {
        //     const response = await axios
        //         .post(BASE_URL + URL.LOGIN, {
        //             username,
        //             password,
        //         });
        //     if (response.data.accessToken) {
        //         localStorage.setItem('user', JSON.stringify(response.data));
        //     }
        //     return response.data;
        // } catch (error) {
        //     return await processAPIError(error);
        // }
    }
}

export default new AuthService();