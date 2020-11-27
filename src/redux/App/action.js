const actions = {
  CLICK_TOGGLE_POPUP: 'CLICK_TOGGLE_POPUP',
  SCREEN_RESIZE: 'SCREEN_RESIZE',
  TOGGLE_SIDE_BAR: 'TOGGLE_SIDE_BAR',
  CLICK_USER_TAB: 'CLICK_USER_TAB',
  CLICK_DAY_OFF_TAB: 'CLICK_DAY_OFF_TAB',
  CLICK_HOLIDAY_TAB: 'CLICK_HOLIDAY_TAB',
  CLICK_SKILL_TAB: 'CLICK_SKILL_TAB',
  CLICK_DEVICE_TAB: 'CLICK_DEVICE_TAB',
  CLICK_REQUEST_DEVICE_TAB: 'CLICK_REQUEST_DEVICE_TAB',
  clickTogglePopup: () => ({
    type: actions.CLICK_TOGGLE_POPUP,
  }),

  screenResize: () => ({
    type: actions.SCREEN_RESIZE,
  }),

  toggleSideBar: () => ({
    type: actions.TOGGLE_SIDE_BAR,
  }),
};

export default actions;
