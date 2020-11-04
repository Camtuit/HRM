import { BEGIN_API_CALL, API_CALL_ERROR } from '../constants/actionTypes';

export function beginApiCall() {
  return { type: BEGIN_API_CALL };
}

export function apiCallError(err) {
  return { type: API_CALL_ERROR, payload: err };
}
