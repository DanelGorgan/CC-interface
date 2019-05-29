import axios from "axios"

export const searchPlaces = (type, name) => dispatch => {
    axios
        .get(`https://us-central1-baietii.cloudfunctions.net/search?type=${type}&name=${name}`)
        .then(result => {      
            dispatch({
                type: 'GET_SEARCH_PLACES',
                places: JSON.parse(JSON.stringify(result.data))
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_PLACES',
                places: [{name: "ceva", type: "club", address: "Strada lacului"}]
            })
            // console.log(error)     
            // dispatch({
            //     type: 'GET_ERRORS_PLACES',
            //     payload: error
            // })
        });

};