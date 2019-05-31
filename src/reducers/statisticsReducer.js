const initialState = {
    places: [],
    topLocations: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_PLACES':
            return {
                ...state,
                places: action.places
            };
          case 'GET_TOP_LOCATIONS':
                return {
                    ...state,
                    topLocations: action.topLocations.rez
                };
        case 'GET_SEARCH_PLACES':
            return {
                ...state,
                places: action.places.results
            };
        case 'GET_ERRORS_PLACES':
            return {
                ...state,
                errors: action.payload
            };
          
        default:
            return state;
    }
}
