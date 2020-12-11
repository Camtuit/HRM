import LoginType from './action';

const { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_LOAD } = LoginType;
const initState = {
  loading: false,
  error: null,
  payload: {},
};
const Login = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.payload,
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default Login;
