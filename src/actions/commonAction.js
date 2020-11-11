/* eslint-disable func-names */
import { get, getMany, remove, post, put } from '../apis/apiMethods';
import { apiCallError, beginApiCall } from './apiStatusAction';
import types from '../constants/apiResourceTypes';
import { toLower } from '../helpers/apiHelper';

export function getManyAction(type, objectQuery) {
  return function (dispatch) {
    const typeAction = `LOAD_${type}_SUCCESS`;
    const url = toLower(type);
    dispatch(beginApiCall());
    return getMany(url, objectQuery)
      .then((res) => {
        return dispatch({ type: typeAction, payload: res.data });
      })
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function getAction(type) {
  return function (dispatch) {
    const url = toLower(type);
    dispatch(beginApiCall());
    return get(url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function createAction(type, body) {
  return function (dispatch) {
    const typeAction = `CREATE_${type}_SUCCESS`;
    const url = toLower(type);
    dispatch(beginApiCall());
    return post(url, body)
      .then((res) => dispatch({ type: typeAction, payload: res.data }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function updateAction(type, data) {
  return function (dispatch) {
    const typeAction = `UPDATE_${types}_SUCCESS`;
    const url = toLower(type);
    dispatch(beginApiCall());
    return put(url, data)
      .then((res) => dispatch({ type: typeAction, payload: res.data }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function removeAction(type, id) {
  return function (dispatch) {
    const typeAction = `DELETE_${types}_OPTIMISTIC`;
    const url = toLower(types[typeAction]);
    dispatch({ type: typeAction, payload: id });
    return remove(url, id);
  };
}
