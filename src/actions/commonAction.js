/* eslint-disable func-names */
import { get, getMany, remove, post, put } from '../apis/apiMethods';
import { apiCallError, beginApiCall } from './apiStatusAction';
import types from '../constants/apiResourceTypes';
import { toLower } from '../helpers/apiHelper';

export function getManyAction(type, objectQuerry) {
  return function (dispatch) {
    const typeAction = `LOAD_${types}_SUCCESS`;
    const url = toLower(types.type);
    dispatch(beginApiCall());
    return getMany(url, objectQuerry)
      .then((data) => dispatch({ type: typeAction, payload: data }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function getAction(type) {
  return function (dispatch) {
    const typeAction = `LOAD_${types}_SUCCESS`;
    const url = toLower(types.type);
    dispatch(beginApiCall());
    return get(url)
      .then((data) => dispatch({ type: typeAction, payload: data }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function createAction(type, objectQuerry, body) {
  return function (dispatch) {
    const typeAction = `CREATE_${types}_SUCCESS`;
    const url = toLower(types.type);
    dispatch(beginApiCall());
    return post(typeAction, body)
      .then((response) => dispatch({ type: typeAction, payload: response }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function updateAction(type, data) {
  return function (dispatch) {
    const typeAction = `UPDATE_${types}_SUCCESS`;
    const url = toLower(types.type);
    dispatch(beginApiCall());
    return put(url, data)
      .then((response) => dispatch({ type: typeAction, payload: response }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function removeAction(type, id) {
  return function (dispatch) {
    const typeAction = `DELETE_${types}_OPTIMISTIC`;
    const url = toLower(types.type);
    dispatch({ type: typeAction, payload: id });
    return remove(url, id);
  };
}
