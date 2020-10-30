import { combineReducers } from 'redux';

import apiCallStatus from './apiStatusReducer';
import users from './userReducer';

const rootReducer = combineReducers({
  users,
  apiCallStatus,
});

export default rootReducer;
