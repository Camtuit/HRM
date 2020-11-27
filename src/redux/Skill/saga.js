import { all, takeEvery, fork, put, call } from 'redux-saga/effects';
import factories from './factory';
import actions from './action';

export function* getSkillList() {
  yield takeEvery(actions.LOAD_SKILL_LIST, function* (payload) {
    try {
      const { data } = payload;
      yield put({ type: actions.LOADING_SKILL_LIST });
      const response = yield call(() => factories.requestGetSkillList(data));
      yield put({
        type: actions.LOAD_SKILL_LIST_SUCCESS,
        response: response.data,
      });
    } catch (error) {
      yield put({ type: actions.LOAD_SKILL_LIST_FAILURE, error });
    }
  });
}

export function* getDetailSkill() {
  yield takeEvery(actions.LOAD_SKILL_DETAIL, function* (payload) {
    console.log(payload);
    try {
      const { id } = payload;
      yield put({ type: actions.LOADING_SKILL_DETAIL });
      const response = yield call(() => factories.requestGetSkillDetail(id));
      yield put({
        type: actions.LOAD_SKILL_DETAIL_SUCCESS,
        response: response.data,
      });
    } catch (error) {
      yield put({ type: actions.LOAD_SKILL_DETAIL_FAILURE, error });
    }
  });
}
export default function* rootSaga() {
  yield all([fork(getSkillList)]);
  yield all([fork(getDetailSkill)]);
}
