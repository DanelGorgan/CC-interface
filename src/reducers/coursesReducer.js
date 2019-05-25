const initialState = {
    places: []
};

export default function (state = initialState, action) {
    switch (action.type) {
      case 'GET_PLACES':
          console.log('-----')
          console.log(action.places)
            return {
                ...state,
                places: action.places
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
