import LoginType from '../redux/Login/action';
const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOAD } = LoginType;

export function loginLoad(data) {
  return {
    type: LOGIN_LOAD,
    payload: data,
  };
}

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    payload: data,
  };
}

export function loginSuccessAction(loginResponse) {
  return {
    type: LOGIN_SUCCESS,
    payload: loginResponse,
  };
}

export function loginFailAction(error) {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
}
