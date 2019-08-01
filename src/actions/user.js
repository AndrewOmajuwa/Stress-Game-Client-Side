import request from 'superagent'
//const baseUrl = 'http://localhost:5000'
const baseUrl = 'https://blooming-everglades-70316.herokuapp.com'

export const USER_SUCCES = 'USER_SUCCES'

const userSucces = event => ({
  type: USER_SUCCES,
  payload: event
})

export const succesUser = (username) => (dispatch) => {
  request
    .post(`${baseUrl}/users`)
    .send({username})
    .then(response => {
      console.log('RESPONSE USER:', response.body)
      dispatch(userSucces(response.body))
    })
    .catch(console.error)
}