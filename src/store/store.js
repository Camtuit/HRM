import { createStore, combineReducers } from "redux";
import sideBarReducer from '../reducers/sideBarReducer';

const reducer = combineReducers({
  sideBarReducer: sideBarReducer
});

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;