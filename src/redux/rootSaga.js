import { all } from 'redux-saga/effects';
import skillSagas from './Skill/saga';

function* rootSaga() {
  yield all([skillSagas()]);
}
export default rootSaga;
