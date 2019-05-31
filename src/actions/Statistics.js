import axios from "axios"

export const getTopLocations = () => dispatch => {
    axios
    .get("https://us-central1-baietii.cloudfunctions.net/statistics-search?type=club")
    .then(result => {
      dispatch({
        type: 'GET_TOP_LOCATIONS',
        topLocations: result.data
      })
    })
    .catch(error => {
      console.log(error)
      dispatch({
        type: 'GET_ERRORS_EXAMS_GRADES',
        payload: error.response.data
      })
    });
};
