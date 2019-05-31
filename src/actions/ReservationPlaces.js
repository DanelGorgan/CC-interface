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

export const updateReservation = (id, response, email) => dispatch => {
    let body = {};
    if (response && response.trim() === "Accept") {
        body.status = "approved"
        console.log(email)
        var data = {
            "to": email,
            "subject": "Quilly - Rezervare",
            "mess": `Rezervarea ta a fost ${body.status}`
        }
        console.log('updateReservation')
        axios
        .post('https://tema4-send-email.azurewebsites.net/api/HttpTrigger1?code=jSw3kMS4yV50NE8clvBMCAOY72Ak6tctIu/PNLAatQ/Fd5HzRHo1BA==', body)
    } else {
        body.status = "declined"
        var data = {
            "to": email,
            "subject": "Quilly - Rezervare",
            "mess": `Rezervarea ta a fost ${body.status}`
        }
        axios
        .post('https://tema4-send-email.azurewebsites.net/api/HttpTrigger1?code=jSw3kMS4yV50NE8clvBMCAOY72Ak6tctIu/PNLAatQ/Fd5HzRHo1BA==', body)
    }

    console.log('updateReservation')

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
