import { callApi } from './axiosService';
import { getQuerry } from '../helpers/apiHelper';

export function getMany(url, objectQuerry) {
  const querry = objectQuerry ? getQuerry(objectQuerry) : '';
  return callApi({
    url: `${url + querry}`,
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
