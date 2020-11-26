import actions from './action';

const initState = {
  clickedShowPopup: false,
};

const AppReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.CLICK_TOGGLE_POPUP:
      return {
        ...state,
        clickedShowPopup: !state.clickedShowPopup,
      };
    default:
      return {
        ...state,
      };
  }
};
export default AppReducer;
