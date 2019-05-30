import axios from "axios"

export const registerUser = (userData) => dispatch => {
    axios
    .post("https://identitymicroservice20190526043251.azurewebsites.net/api/account/Register", userData)
    .then(result => {
      console.log(result)
      alert('Inregistrare cu succes');
      dispatch({
        type: 'SET_CURRENT_USER_REGISTER',
        user: { id: result.id },
        isRegistered: true
      })
    })
    .catch(error => {
      alert('Inregistrare cu succes');
      dispatch({
        type: 'SET_CURRENT_USER_REGISTER',
        user: { id: error.id },
        isRegistered: true
      })
    });

};