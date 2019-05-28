import axios from "axios"

export const getReservations = () => dispatch => {
    axios
        .get("https://datastore-project-236517.appspot.com/reservations/5634161670881280")
        .then(result => {
            dispatch({
                type: 'GET_RESERVATIONS',
                reservations: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_ERRORS_RESERVATIONS',
                payload: error.response.data
            })
        });

};
