import {
  CALL_LOADER,
  CLOSE_LOADER,
  DAY_OFF_TAB,
  DEVICE_TAB,
  HOLIDAY_TAB,
  REQUEST_DEVICE_TAB,
  SCREEN_RESIZE,
  SKILL_TAB,
  TOGGLE_POPUP,
  TOGGLE_SIDE_BAR,
  USER_TAB,
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

export function callLoader(accepted = true) {
  return { type: CALL_LOADER, payload: accepted };
}
export function closeLoader(accepted = false) {
  return { type: CLOSE_LOADER, payload: accepted };
}
export function clickUserTab(accepted = 1) {
  return { type: USER_TAB, payload: accepted };
}
export function clickDayOffTab(accepted = 2) {
  return { type: DAY_OFF_TAB, payload: accepted };
}
export function clickHolidayTab(accepted = 3) {
  return { type: HOLIDAY_TAB, payload: accepted };
}
export function clickSkillTab(accepted = 4) {
  return { type: SKILL_TAB, payload: accepted };
}
export function clickDeviceTab(accepted = 5) {
  return { type: DEVICE_TAB, payload: accepted };
}
export function clickRequestDeviceTab(accepted = 6) {
  return { type: REQUEST_DEVICE_TAB, payload: accepted };
}
