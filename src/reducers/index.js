import { combineReducers } from 'redux';

import apiCallStatus from './apiStatusReducer';
import users from './userReducer';
import sideBarReducer from './sideBarReducer';

const rootReducer = combineReducers({
  sideBarReducer,
  users,
  apiCallStatus,
});

export default rootReducer;
