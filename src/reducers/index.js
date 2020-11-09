import { combineReducers } from 'redux';

import apiCallStatus from './apiStatusReducer';
import users from './userReducer';
import sideBarReducer from './sideBarReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  sideBarReducer,
  modalReducer,
  users,
  apiCallStatus,
});

export default rootReducer;
