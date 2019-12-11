import { LOGGED_IN } from '../actions'

const initialState = {
  username: '',
  jwt: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return action.payload
    default:
      return state
  }
}