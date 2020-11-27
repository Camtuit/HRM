import { deviceSizeFixed } from '../../constants/deviceSize';
import actions from './action';

const initState = {
  clickedShowPopup: false,
  screenWidth: typeof window === 'object' ? window.innerWidth : undefined,
  toggledSideBar: false,
};

const AppReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.CLICK_TOGGLE_POPUP:
      return {
        ...state,
        clickedShowPopup: !state.clickedShowPopup,
      };
    case actions.SCREEN_RESIZE:
      return {
        ...state,
        screenWidth: action.payload,
      };
    case actions.TOGGLE_SIDE_BAR:
      return {
        ...state,
        toggledSideBar: !state.toggledSideBar,
      };
    default:
      return {
        ...state,
      };
  }
};
export default AppReducer;
