import { combineReducers } from 'redux';

import apiCallStatus from './apiStatusReducer';
import users from './userReducer';
import sideBarReducer from './sideBarReducer';
import { screenWidth, toggledSideBar, toggledPopup } from './utilsReducer';

const rootReducer = combineReducers({
  sideBarReducer,
  users,
  apiCallStatus,
  screenWidth,
  toggledSideBar,
  toggledPopup,
});

export default rootReducer;
