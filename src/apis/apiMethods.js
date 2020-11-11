import { callApi, callSubApi } from './axiosService';
import { getQuery } from '../helpers/apiHelper';

export function getMany(url, objectQuery) {
  const query = objectQuery ? getQuery(objectQuery) : '';
  if (url === 'holidays' || url === 'skills') {
    return callSubApi({
      url: `${url}?${query}`,
      method: 'GET',
    });
  }
  return callApi({
    url: `${url + query}`,
    method: 'GET',
  });
}

export function get(url, id) {
  if (url === 'holidays' || url === 'skills') {
    return callSubApi({
      url: `${url}/${id}`,
      method: 'GET',
    });
  }
  return callApi({
    url: `${url}/${id}`,
    method: 'GET',
  });
}

export function post(url, data) {
  if (url === 'holidays' || url === 'skills') {
    return callSubApi({
      url,
      method: 'POST',
      data,
    });
  }
  return callApi({
    url,
    method: 'POST',
    data,
  });
}
export function remove(url, id) {
  if (url === 'holidays' || url === 'skills') {
    return callApi({
      url,
      method: 'DELETE',
      data: id,
    });
  }
  return callApi({
    url,
    method: 'DELETE',
    data: id,
  });
}
export function put(url, data) {
  const { id, ...body } = data;
  if (url === 'holidays' || url === 'skills') {
    return callApi({
      url: `${url}/${id}`,
      method: 'PUT',
      data: body,
    });
  }
  return callApi({
    url: `${url}/${id}`,
    method: 'PUT',
    data: body,
  });
}
