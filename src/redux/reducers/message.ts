import { ActionTypes } from '../actions/types';
const initialState = {};
export default function (state = initialState, action: { type: ActionTypes; payload: any; }) {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_MESSAGE:
            return { message: payload };
        case ActionTypes.CLEAR_MESSAGE:
            return { message: '' };
        default:
            return state;
    }
}