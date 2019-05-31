import axios from "axios"

export const searchPlaces = (type, name) => dispatch => {
    axios
        .get(`https://us-central1-baietii.cloudfunctions.net/search?type=${type}&name=${name}`)
        .then(result => {
            dispatch({
                type: 'GET_SEARCH_PLACES',
                places: result.data
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

export const recommendPlaces = (type, name) => dispatch => {
    axios
        .get(`https://us-central1-baietii.cloudfunctions.net/recommendations?type=${type}&name=${name}`)
        .then(result => {
            dispatch({
                type: 'GET_RECOMMEND_PLACES',
                recommend: result.data
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
