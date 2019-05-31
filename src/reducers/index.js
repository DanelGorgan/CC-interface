import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import coursesReducer from './coursesReducer';
import reservationsReducer from './reservationsReducer';
import mapReducer from './MapReducer';
import userReducer from './userReducer';
import errorReducer from "./errorReducer";
import registerReducer from "./registerReducer";
import statisticsReducer from "./statisticsReducer"
import recommendReducer from "./recommendReducer";


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const reducers = combineReducers({
    routing: routerReducer,
    auth: authReducer,
    register: registerReducer,
    user: userReducer,
    places: coursesReducer,
    recommend: recommendReducer,
    link: mapReducer,
    reservations: reservationsReducer,
    reservationsResponse: reservationsReducer,
    errors: errorReducer,
    topLocations: statisticsReducer
});

export default reducers
