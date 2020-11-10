import { LOAD_META_SUCCESS } from '../constants/actionTypes';

import initialState from '../constants/initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case LOAD_META_SUCCESS:
      return state;
    default:
      return initialState;
  }
}
