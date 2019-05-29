import axios from "axios"

export const submitForm = (data) => dispatch => {
    axios
        .post("https://datastore-project-236517.appspot.com/reservations", data)
        .then(result => {
            dispatch({
                type: 'POST_RESERVATION',
                reservations: result.data.message
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_ERRORS_RESERVATION',
                payload: error.response.data
            })
        });

};
