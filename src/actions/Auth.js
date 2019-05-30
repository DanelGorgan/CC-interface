import axios from "axios"

export const loginUser = (userData, history) => dispatch => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*'
    }
  }

  axios
    .post("https://identitymicroservice20190526043251.azurewebsites.net/api/account/Login", userData, config)
    .then(result => {
      localStorage.setItem('jwtToken', result.data.resultModel.token);
      localStorage.setItem('userId', result.data.resultModel.id);
      dispatch({
        type: 'SET_CURRENT_USER',
        user: { id: result.id },
        isAuthenticated: true
      })

    })
    .catch(error => {
      dispatch({
        type: 'GET_ERRORS_LOGIN',
        payload: error.response.data
      })
    });

};

// Log out user
export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken')
  dispatch({
    type: 'SET_CURRENT_USER',
    user: {},
    isAuthenticated: false
  })
}