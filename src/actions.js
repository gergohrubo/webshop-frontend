import request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const SIGN_UP = 'SIGN_UP'

// const eventCreateSuccess = event => ({
//   type: EVENT_CREATE_SUCCESS,
//   event
// })

export const signUp = (username, password, push) => dispatch => {
  const data = { username, password }
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      if (push) {
        push('/album')
      }
      //dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const UPLOAD = 'UPLOAD'

export const uploadArticle = (data, push) => dispatch => {
  request
    .post(`${baseUrl}/article`)
    .send(data)
    .then(response => {
      if (push) {
        push('/album')
      }
      //dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}