import { combineReducers } from 'redux';

import App from './App/reducer';
import Skill from './Skill/reducer';

const rootReducer = combineReducers({
  App,
  Skill,
});
export default rootReducer;
