import { SCREEN_RESIZE, TOGGLE_SIDE_BAR } from '../constants/actionTypes';
import initialState from '../constants/initialState';

export function screenWidth(state = initialState.screenWidth, action) {
  switch (action.type) {
    case SCREEN_RESIZE:
      return action.payload;
    default:
      return state;
  }
}

export function toggledSideBar(state = initialState.toggledSideBar, action) {
  switch (action.type) {
    case TOGGLE_SIDE_BAR:
      if (action.payload) return state;
      return !state;
    default:
      return state;
  }
}
