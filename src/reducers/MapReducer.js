const initialState = {
    link: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_LINK':
            return {
                ...state,
                link: action.link
            };
        default:
            return state;
    }
}
