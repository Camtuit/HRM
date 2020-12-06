import { all } from 'redux-saga/effects';
import skillSagas from './Skill/saga';
import loginSagas from './Login/saga';
function* rootSaga() {
  yield all([skillSagas(), loginSagas()]);
}
export default rootSaga;
