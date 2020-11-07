const initialState = {
  users: [],
  apiCallStatus: 0,
  screenWidth: typeof window === 'object' ? window.innerWidth : undefined,
  toggledSideBar: false,
};

export default initialState;
