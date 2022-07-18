import axios from 'axios';

export default function authHeader(): any {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}

export function processAPIError(error: any) {
    if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return Promise.reject(error.message);
    } else {
        console.log('unexpected error: ', error);
        return Promise.reject('An unexpected error occurred');
    }
}

export interface IStatus {
    isLoading: boolean,
    errorMsg: string,
}