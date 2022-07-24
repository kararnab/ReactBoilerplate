import axios, { AxiosResponse } from 'axios';
import { ILogin } from '../redux/slices/userSlice';
import { APP_VERSION, BASE_URL, URL } from './Constants';
import APIClientWrapper from './APIClientWrapper';
import { fakeAxiosFailureResponse, fakeAxiosSuccessResponse, isMocked } from './mocks';
import AuthenticationMocker from './mocks/auth';
import { processAPIError } from './util';
import { LoggerUtil } from '../util/LoggerUtil';

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
        return new Promise((resolve, reject) => {
            let req: Promise<AxiosResponse<ILogin>>;
            if (isMocked) {
                //req = fakeAxiosSuccessResponse<ILogin>(Object.assign({}, AuthenticationMocker.RES_LOGIN_SUCCESS), { app_version: APP_VERSION });
                req = fakeAxiosFailureResponse<ILogin>(Object.assign({}, AuthenticationMocker.RES_LOGIN_FAILURE), { app_version: APP_VERSION });
            } else {
                req = APIClientWrapper().get(URL.LOGIN, {
                    headers: {
                        'app_version': APP_VERSION
                    }
                });
            }
            return req
                .then((response: AxiosResponse<ILogin>) => {
                    if (response && response.status) {
                        resolve(response);
                    } else {
                        //Internet connectivity issue
                        reject('Internet Connectivity Issue');
                    }
                })
                .catch((err) => {
                    //Internet connectivity issue/ any other issue?
                    LoggerUtil.logErrorEvent(err);
                    reject(err);
                });
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