import axios from 'axios';
import { handleResponse, handleError } from '../helpers/apiHelper';

const baseURL = process.env.API_URL || 'http://api-php.dev-hrm.nals.vn/api';
const subBaseURL =
  process.env.API_URL_SUB || 'http://api-java.dev-hrm.nals.vn/api';

export const instanceAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const subInstanceAxios = axios.create({
  baseURL: subBaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function callApi(config) {
  return instanceAxios(config).then(handleResponse).catch(handleError);
}

export function callSubApi(config) {
  return subInstanceAxios(config).then(handleResponse).catch(handleError);
}
