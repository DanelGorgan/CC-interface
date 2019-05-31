import axios from "axios"

export const getReservations = () => dispatch => {
    axios
        .get(`https://datastore-project-236517.appspot.com/reservations/${localStorage.getItem('userId')}`)
        .then(result => {
            console.log(result.data)
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

export const updateReservation = (id, response) => dispatch => {
    let body = {};
    if (response && response.trim() === "Accept") {
        body.status = "approved"
    } else {
        body.status = "declined"
    }
    axios
        .put(`https://datastore-project-236517.appspot.com/reservations/${id}`, body)
        .then(result => {
            dispatch({
                type: 'PUT_RESERVATIONS',
                reservationsResponse: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_ERRORS_RESERVATIONS',
                payload: error
            })
        });

};
