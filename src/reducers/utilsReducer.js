import {
  CALL_LOADER,
  CLOSE_LOADER,
  SCREEN_RESIZE,
  TOGGLE_POPUP,
  TOGGLE_SIDE_BAR,
} from '../constants/actionTypes';
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
      if (!action.payload) return state;
      return !state;
    default:
      return state;
  }
}

export function toggledPopup(state = initialState.toggledPopup, action) {
  switch (action.type) {
    case TOGGLE_POPUP:
      if (!action.payload) return state;
      return !state;
    default:
      return state;
  }
}

export function loader(state = initialState.loader, action) {
  switch (action.type) {
    case CALL_LOADER:
      return true;
    case CLOSE_LOADER:
      return false;
    default:
      return state;
  }
}

export function changeActiveTab(state = initialState.activeLink, action) {
  switch (action.type) {
    case CALL_LOADER:
      return true;
    case CLOSE_LOADER:
      return false;
    default:
      return state;
  }
}
