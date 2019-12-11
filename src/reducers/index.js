import { combineReducers } from "redux";
import articlesReducer from './articles'
import loginReducer from './login'


export default combineReducers({
  articles: articlesReducer,
  currentUser: loginReducer
});