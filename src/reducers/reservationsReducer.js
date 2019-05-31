const initialState = {
    reservations: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_ROOMS':
            return {
                ...state,
                rooms: action.rooms
            };
        case 'GET_RESERVATIONS':
            return {
                ...state,
                reservations: action.reservations
            };
        case 'PUT_RESERVATIONS':
            return {
                ...state,
                reservationsResponse: action.reservationsResponse
            };
        case 'POST_RESERVATION':
            return {
                ...state,
                reservations: action.reservations
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
