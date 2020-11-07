import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import initialState from '../constants/initialState';
import { screenResize } from '../actions/utilsAction';

export default function configureStore(initialStore = initialState) {
  const composeEnhencers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialStore,
    composeEnhencers(applyMiddleware(thunk)),
  );
  window.addEventListener('resize', () => {
    store.dispatch(screenResize(window.innerWidth));
  });
  return store;
}
