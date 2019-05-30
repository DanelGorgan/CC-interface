import axios from "axios"

export const getStats = () => dispatch => {

    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


    axios
        .get("https://us-central1-baietii.cloudfunctions.net/time-graph?placeId=0a53ba2e-4fca-4fb6-95ab-b41b74533f23")
        .then(result => {
          
            dispatch({
                type: 'GET_LINK',
                link: result.data
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_ERRORS_LINK',
                payload: error.response
            })
        });

};
