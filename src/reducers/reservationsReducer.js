const initialState = {
    reservations: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_RESERVATIONS':
            return {
                ...state,
                reservations: action.reservations
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
