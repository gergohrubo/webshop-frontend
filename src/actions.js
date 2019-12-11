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

export const ARTICLES_FETCHED = 'ARTICLES_FETCHED'

function fetchedArticles(payload) {
  return {
    type: ARTICLES_FETCHED,
    payload
  }
}

export const getArticles = () => dispatch => {
  request
    .get(`${baseUrl}/article`)
    .then(response => {
      console.log('articles are here', response.body)
      dispatch(fetchedArticles(response.body))
    })
    .catch(console.error)
}

export const LOGGED_IN = 'LOGGED_IN'

function loggedIn(payload) {
  return {
    type: LOGGED_IN,
    payload
  }
}

export const logIn = (username, password, push) => dispatch => {
  const data = { username, password }
  console.log('sending the data:', data)
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      if (push) {
        push('/album')
      }
      dispatch(loggedIn(response.body))
    })
    .catch(console.error)
}