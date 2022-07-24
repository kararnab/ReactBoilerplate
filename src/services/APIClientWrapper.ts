import axios, { AxiosInstance } from 'axios';
import { LoggerUtil } from '../util/LoggerUtil';
import { BASE_URL } from './Constants';

const client = axios.create({
    baseURL: BASE_URL, //TODO:
    timeout: 10000
});

export const setAxiosInterceptors = (clientInstance: AxiosInstance) => {
    clientInstance.interceptors.request.use((request) => {
        return request;
    });

    clientInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            const data = {
                data: {
                    status: error?.response?.status || null,
                    data: error?.response?.data || null,
                    headers: error?.response?.headers || null,
                    requestUrl: error?.request?._url || null,
                },
                timestamp: Math.round(Date.now() / 1000),
            };
            LoggerUtil.logErrorEvent(data);

            return error.response;
        }
    );
};

setAxiosInterceptors(client);

const clientWrapper = () => {
    return client;
};

export default clientWrapper;