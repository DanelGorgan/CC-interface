const initialState = {
    isRegistered: false,
    user: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_CURRENT_USER_REGISTER':
            return {
                ...state,
                isRegistered: action.isRegistered,
                user: action.user
            }
        case 'GET_ERRORS':
            return {
                ...state,
                isRegistered: action.isRegistered,
                errors: action.payload
            }
        default:
            return state;
    }
}