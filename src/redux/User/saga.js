import { all, takeEvery, fork, put, call } from 'redux-saga/effects';
import factories from './factory';
import actions from './action';

const {
  LOADING_USER_LIST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_USER_LIST,
} = actions;
export function* getUserList() {
  yield takeEvery(LOAD_USER_LIST, function* (action) {
    try {
      yield put({ type: LOADING_USER_LIST });
      const response = yield call(() => factories.UserList(action.payload));
      yield put({
        type: LOAD_USER_SUCCESS,
        response: response.data,
      });
    } catch (error) {
      yield put({ type: LOAD_USER_FAILURE, payload: error });
    }
  });
}
