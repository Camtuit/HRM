import { BEGIN_API_CALL, API_CALL_ERROR } from '../constants/actionTypes';
import initialState from '../constants/initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}

/* - apiCallStatus + 1 when a api begin
   - apiCallStatus - 1 when api call success or fail.
 */

export default function apiCallStatusReducer(
  state = initialState.apiCallStatus,
  action,
) {
  if (action.type === BEGIN_API_CALL) {
    return state + 1;
  }
  if (action.type === API_CALL_ERROR || actionTypeEndsInSuccess(action.type))
    return state - 1;
  return state;
}
