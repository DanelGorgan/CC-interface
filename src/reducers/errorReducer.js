const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_ERRORS_LOGIN":
            return {
                ...state,
                errors: action.payload ? action.payload : "Invalid email or password!"
            }
            break;
        default:
            return state;
    }
}
