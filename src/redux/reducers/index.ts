import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //local storage
import auth from './auth';
import message from './message';

const REDUX_STORAGE_KEY = 'root';

const persistConfigMessage = {
    key: REDUX_STORAGE_KEY,
    storage,
    whitelist: [
        'item'
    ]
};

export default combineReducers({
    Auth: auth,
    Message: persistReducer(persistConfigMessage, message),
});