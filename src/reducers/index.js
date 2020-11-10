import { combineReducers } from 'redux';

import apiCallStatus from './apiStatusReducer';
import users from './userReducer';
import holidays from './holidayReducer';
import meta from './metaReducer';
import { screenWidth, toggledSideBar } from './utilsReducer';

const rootReducer = combineReducers({
  users,
  holidays,
  apiCallStatus,
  meta,
  screenWidth,
  toggledSideBar,
});

export default rootReducer;
