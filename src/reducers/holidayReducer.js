import {
  LOAD_HOLIDAYS_SUCCESS,
  CREATE_HOLIDAY_SUCCESS,
  UPDATE_HOLIDAY_SUCCESS,
  DELETE_HOLIDAY_OPTIMISTIC,
} from '../constants/actionTypes';

import initialState from '../constants/initialState';

export default function holidayReducer(state = initialState.holidays, action) {
  switch (action.type) {
    case LOAD_HOLIDAYS_SUCCESS:
      return action.payload;
    case CREATE_HOLIDAY_SUCCESS: {
      return [...state, { ...action.payload }];
    }
    case UPDATE_HOLIDAY_SUCCESS: {
      const newHoliday = state.map((holiday) => {
        if (holiday.id === action.payload.id) return action.payload;
        return holiday;
      });
      return newHoliday;
    }
    case DELETE_HOLIDAY_OPTIMISTIC: {
      return state.filter((holiday) => holiday.id === action.payload);
    }
    default:
      return state;
  }
}
