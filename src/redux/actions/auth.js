import {
    ActionTypes
} from '../actions/types';
import AuthService from '../../services/auth.service';
export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
        (response) => {
            dispatch({
                type: ActionTypes.REGISTER_SUCCESS,
            });
            dispatch({
                type: ActionTypes.SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: ActionTypes.REGISTER_FAIL,
            });
            dispatch({
                type: ActionTypes.SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (data) => {
            dispatch({
                type: ActionTypes.LOGIN_SUCCESS,
                payload: { ...data },
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: ActionTypes.LOGIN_FAIL,
            });
            dispatch({
                type: ActionTypes.SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: ActionTypes.LOGOUT,
    });
};