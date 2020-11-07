import { SCREEN_RESIZE } from '../constants/actionTypes';

export function screenResize(screenWidth) {
  return { type: SCREEN_RESIZE, payload: screenWidth };
}
