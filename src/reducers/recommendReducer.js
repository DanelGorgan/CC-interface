const initialState = {
    places: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_RECOMMEND_PLACES':
            return {
                ...state,
                recommend: action.recommend
            };
        default:
            return state;
    }
}
