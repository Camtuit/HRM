import { SCREEN_RESIZE, TOGGLE_SIDE_BAR } from '../constants/actionTypes';

export function screenResize(screenWidth) {
  return { type: SCREEN_RESIZE, payload: screenWidth };
}

export function toggleSideBar(accepted = false) {
  return { type: TOGGLE_SIDE_BAR, payload: accepted };
}
