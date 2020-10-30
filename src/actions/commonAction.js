/* eslint-disable func-names */
import { get, remove, post, put } from '../apis/apiMethods';
import { apiCallError, beginApiCall } from './apiStatusAction';

export function loadAction(typeResource) {
  return function (dispatch) {
    const typeAction = `LOAD_${typeResource}_SUCCESS`;
    dispatch(beginApiCall());
    return get(typeResource)
      .then((data) => dispatch({ type: typeAction, payload: data }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function createAction(typeResource, typeAction, data) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return post(typeResource, data)
      .then((response) => dispatch({ type: typeAction, payload: response }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function updateAction(typeResource, typeAction, data) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return put(typeResource, data)
      .then((response) => dispatch({ type: typeAction, payload: response }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function removeAction(typeResource, typeAction, id) {
  return function (dispatch) {
    dispatch({ type: typeAction, payload: id });
    return remove(typeResource, id);
  };
}
