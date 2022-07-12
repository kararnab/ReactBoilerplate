import {
    ActionTypes
} from '../actions/types';
const user = JSON.parse(localStorage.getItem('user') || '{}');
const initialState = { authKey: '', user: null };
export default function (state = initialState, action: { type: ActionTypes; payload: any; }) {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.REGISTER_SUCCESS:
        case ActionTypes.REGISTER_FAIL:
            return {
                ...state,
                authKey: '',
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                authKey: payload.authKey,
                user: payload.user,
            };
        case ActionTypes.LOGIN_FAIL:
        case ActionTypes.LOGOUT:
            return {
                ...state,
                authKey: '',
                user: null,
            };
        default:
            return state;
    }
}