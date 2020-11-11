import {
  CREATE_USER_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USERS_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_OPTIMISTIC,
} from '../constants/actionTypes';
import { get, getMany, remove, post, put } from '../apis/apiMethods';
import { apiCallError, beginApiCall } from './apiStatusAction';

/*
  Example object query: { full_name: 'Juliet',  status: 1}
*/

// IT IS BACK UP FILE

export function getUsers(url, objectQuery) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return getMany(url, objectQuery)
      .then((data) => dispatch({ type: LOAD_USERS_SUCCESS, payload: data }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function getUser(url, id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return get(url, id)
      .then((data) => dispatch({ type: LOAD_USER_SUCCESS, payload: data }))
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function createUser(url) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return post(url)
      .then((response) =>
        dispatch({ type: CREATE_USER_SUCCESS, payload: response }),
      )
      .catch((err) => dispatch(apiCallError(err)));
  };
}

export function updateUser(url, data) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return put(url, data)
      .then((response) =>
        dispatch({ type: UPDATE_USER_SUCCESS, payload: response }),
      )
      .catch((err) => dispatch(apiCallError(err)));
  };
}
export function deleteUser(url, id) {
  return function (dispatch) {
    dispatch({ type: DELETE_USER_OPTIMISTIC, payload: id });
    return remove(url, id);
  };
}
