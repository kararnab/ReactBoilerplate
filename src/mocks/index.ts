import { AxiosRequestConfig, AxiosResponse } from "axios";

export const isMocked = false;

export function fakeAxiosSuccessResponse<T>(data: T, headers?: any, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<T>> {
    const promise: Promise<AxiosResponse<T>> = new Promise((resolve, _reject) => {
        const axiosResponse: AxiosResponse<T> = {
            data,
            status: 200,
            statusText: 'Success',
            headers: headers || {},
            config: config || {},
        };
        setTimeout(() => resolve(axiosResponse), 1000);
    });
    return promise;
};