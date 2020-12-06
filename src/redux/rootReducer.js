import { combineReducers } from 'redux';

import App from './App/reducer';
import Skill from './Skill/reducer';
import Login from './Login/reducer';

const rootReducer = combineReducers({
  App,
  Skill,
  Login,
});
export default rootReducer;
