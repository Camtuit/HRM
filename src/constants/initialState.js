import { deviceSizeFixed } from './deviceSize';

const initialState = {
  toggledModal: false,
  users: [],
  apiCallStatus: 0,
  screenWidth: typeof window === 'object' ? window.innerWidth : undefined,
  toggledSideBar: window.innerWidth >= deviceSizeFixed.laptop ? 1 : 0,
};

export default initialState;
