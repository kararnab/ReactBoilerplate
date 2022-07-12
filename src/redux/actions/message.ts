import {
    ActionTypes
} from '../actions/types';
export const setMessage = (message: any) => ({
    type: ActionTypes.SET_MESSAGE,
    payload: message,
});
export const clearMessage = () => ({
    type: ActionTypes.CLEAR_MESSAGE,
});