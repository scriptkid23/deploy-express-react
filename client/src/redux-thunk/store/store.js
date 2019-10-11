import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {reducerAlert}  from '../reducers/reducer.alert';
import thunkMiddleware from 'redux-thunk';
const loggerMiddleware = createLogger();
export const store = createStore(
    reducerAlert,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);