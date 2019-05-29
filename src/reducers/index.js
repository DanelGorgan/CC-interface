import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import coursesReducer from './coursesReducer';
import reservationsReducer from './reservationsReducer';
import userReducer from './userReducer';
import errorReducer from "./errorReducer";


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const reducers = combineReducers({
    routing: routerReducer,
    auth: authReducer,
    user: userReducer,
    places: coursesReducer,
    reservations: reservationsReducer,
    reservationsResponse: reservationsReducer,
    errors: errorReducer
});

export default reducers
