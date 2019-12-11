import { ARTICLES_FETCHED } from '../actions'

export default function reducer(state = null, action) {
  switch (action.type) {
    case ARTICLES_FETCHED:
      return action.payload
    default:
      return state
  }
}