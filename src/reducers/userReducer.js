import {
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_OPTIMISTIC,
  LOAD_USER_SUCCESS,
} from '../constrants/actionTypes';

import initialState from '../constrants/initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      return action.payload;
    case CREATE_USER_SUCCESS: {
      return [...state, { ...action.payload }];
    }
    case UPDATE_USER_SUCCESS: {
      const newUsers = state.map((user) => {
        if (user.id === action.payload.id) return action.payload;
        return user;
      });
      return newUsers;
    }
    case DELETE_USER_OPTIMISTIC: {
      return state.filter((user) => user.id === action.payload);
    }
    default:
      return state;
  }
}
