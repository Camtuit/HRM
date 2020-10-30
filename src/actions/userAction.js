import {
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_OPTIMISTIC,
} from '../constrants/actionTypes';
import types from '../constrants/apiResourceTypes';
import { updateAction, removeAction, createAction } from './commonAction';

export const createUser = (user) =>
  createAction(types.USER, CREATE_USER_SUCCESS, user);
export const updateUser = (user) =>
  updateAction(types.USER, UPDATE_USER_SUCCESS, user);
export const deleteUser = (id) =>
  removeAction(types.USER, DELETE_USER_OPTIMISTIC, id);
