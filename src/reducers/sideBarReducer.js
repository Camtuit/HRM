const initialState = {
  isSideBarOpen: true,
};

const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
const HIDE_SIDEBAR = 'HIDE_SIDEBAR';

export const showSideBar = () => ({
  type: SHOW_SIDEBAR,
});

export const hideSideBar = () => ({
  type: HIDE_SIDEBAR,
});

const sideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      return {
        ...state,
        isSideBarOpen: true,
      };

    case 'HIDE_SIDEBAR':
      return {
        ...state,
        isSideBarOpen: false,
      };

    default:
      return state;
  }
};

export default sideBarReducer;
