import { combineReducers } from 'redux'
import placesReducer from './placesReducer';
import { connectRouter } from 'connected-react-router'
/*

 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const reducers = (history) => {
    console.log(history);
    return combineReducers({
        places: placesReducer,
        router: connectRouter(history),
    });
}

export default reducers
