import axios from 'axios';
import { ILogin } from '../redux/slices/userSlice';
import { BASE_URL, URL } from './Constants';
import { processAPIError } from './util';

class AuthService {
    async register(username: string, email: string, password: string) {
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

    async login(username: string, password: string) {

        return new Promise<ILogin>(function (resolve, reject) {
            const dummyLogin = {
                status: {
                    isLoading: false,
                    errorMsg: ''
                },
                authKey: '1232141dfsa4223',
                user: {
                    id: '1',
                    name: 'Arnab Kar',
                    phone: '9876543210'
                }
            };
            return setTimeout(() => {
                return resolve(dummyLogin);
            }, 1000);
        });


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