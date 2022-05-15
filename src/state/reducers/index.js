import { combineReducers } from 'redux';
import userReducer from './userReducer';
import matchReducer from './matchReducer';
import formReducer from './formReducer';

export default combineReducers({
  users: userReducer,
  matches: matchReducer,
  form: formReducer,
});
