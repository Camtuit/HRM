import { callApi } from './axiosService';
import { getQuery } from '../helpers/apiHelper';

export function getMany(url, objectQuery) {
  const query = objectQuery ? getQuery(objectQuery) : '';
  return callApi({
    url: `${url + query}`,
    method: 'GET',
  });
}

export function get(url, id) {
  return callApi({
    url: `${url}/${id}`,
    method: 'GET',
  });
}

export function post(url) {
  return callApi({
    url,
    method: 'POST',
  });
}
export function remove(url, id) {
  return callApi({
    url,
    method: 'DELETE',
    data: id,
  });
}
export function put(url, data) {
  const { id, ...body } = data;
  return callApi({
    url: `${url}/${id}`,
    method: 'PUT',
    data: body,
  });
}
