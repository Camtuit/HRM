import { deviceSizeFixed } from './deviceSize';

const initialState = {
  /* ME */
  currentUser: {},
  /* META */
  meta: {},
  /* USER */
  users: [],
  /* SKILL */
  skills: [],
  /* HOLIDAY */
  holidays: [],
  /*
    API STATUS:
      0 (default) => no request
      1 => a request is sending
     -1 => a request was responsed
  */
  apiCallStatus: 0,
  /* UTILITIES */
  screenWidth: typeof window === 'object' ? window.innerWidth : undefined, // width of screen
  toggledSideBar: window.innerWidth >= deviceSizeFixed.laptop ? 1 : 0, // true => side bar is expanded, 0 => side bar is collapsed
  // toggledModal: false,
  toggledPopup: false,
};

export default initialState;
