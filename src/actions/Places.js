import axios from "axios"

export const getPlaces = () => dispatch => {
    axios
        .get("https://datastore-project-236517.appspot.com/places")
        .then(result => {
            dispatch({
                type: 'GET_PLACES',
                places: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_ERRORS_PLACES',
                payload: error.response.data
            })
        });

};

export const addPlace = (formData) => dispatch => {
    axios
        .post("https://datastore-project-236517.appspot.com/places", formData)
        .then(result => {
            dispatch({
                type: 'GET_PLACES',
                places: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_ERRORS_PLACES',
                payload: error.response.data
            })
        });
}
