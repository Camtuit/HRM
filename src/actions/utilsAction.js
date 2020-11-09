import {
  SCREEN_RESIZE,
  TOGGLE_POPUP,
  TOGGLE_SIDE_BAR,
} from '../constants/actionTypes';

export function screenResize(screenWidth) {
  return { type: SCREEN_RESIZE, payload: screenWidth };
}

export function toggleSideBar(accepted = true) {
  return { type: TOGGLE_SIDE_BAR, payload: accepted };
}

export function togglePopup(accepted = true) {
  return { type: TOGGLE_POPUP, payload: accepted };
}
