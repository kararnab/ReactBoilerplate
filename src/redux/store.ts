// Reference: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';

export default function configureStore() {
    const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

    const store = createStore(rootReducer, composedEnhancer);
    const persistor = persistStore(store);

    return { store, persistor };
}