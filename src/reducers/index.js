import { combineReducers } from 'redux';

import apiCallStatus from './apiStatusReducer';
import users from './userReducer';
import sideBarReducer from './sideBarReducer';
import { screenWidth, toggledSideBar } from './utilsReducer';

const rootReducer = combineReducers({
  sideBarReducer,
  users,
  apiCallStatus,
  screenWidth,
  toggledSideBar,
});

export default rootReducer;
