import { all, takeEvery, fork, put, call } from 'redux-saga/effects';
import factories from './factory';
import LoginType from './action';
const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOAD } = LoginType;

export function* loginSaga() {
  yield takeEvery(LOGIN_LOAD, function* (action) {
    try {
      console.log(action);
      yield put({ type: LOGIN_REQUEST, action });
      const response = yield call(() => factories.Login(action.payload));
      yield put({
        type: LOGIN_SUCCESS,
        payload: response,
      });
      console.log('response', response);
    } catch (error) {
      yield put({ type: LOGIN_ERROR, payload: error });
      console.log('response', error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
}
