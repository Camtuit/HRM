import { callApi } from './axiosService';
import types from '../constrants/apiResourceTypes';

const getUrl = (type) => types[type].toLowerCase();

export function get(type) {
  return callApi({
    url: getUrl(type),
    method: 'GET',
  });
}
export function post(type, data) {
  return callApi({
    url: getUrl(type),
    method: 'POST',
    data,
  });
}
export function remove(type, id) {
  return callApi({
    url: getUrl(type),
    method: 'DELETE',
    data: id,
  });
}
export function put(type, data) {
  const { id, ...body } = data;
  return callApi({
    url: getUrl(type),
    method: 'PUT',
    data: body,
  });
}
