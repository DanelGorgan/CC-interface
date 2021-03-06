import axios from "axios"

export const submitForm = (data) => dispatch => {
    axios
        .post("https://datastore-project-236517.appspot.com/places", data)
        .then(result => {
            dispatch({
                type: 'POST_PLACES',
                places: result.data.message
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_ERRORS_PLACES',
                payload: error.response.data
            })
        });

};

export const updateForm = (data) => dispatch => {
    console.log(data)
    axios
        .put(`https://datastore-project-236517.appspot.com/places/${data.id}`, data)
        .then(result => {
            dispatch({
                type: 'PUT_PLACES',
                places: result.data.message
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_ERRORS_PLACES',
                payload: error.response.data
            })
        });

};