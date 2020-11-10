import axios from 'axios';
import { handleResponse, handleError } from '../helpers/apiHelper';

<<<<<<< HEAD
const baseURL = 'http://api-java.dev-hrm.nals.vn/api';
=======
const baseURL = process.env.API_URL || 'http://api-php.dev-hrm.nals.vn/api';
const subBaseURL =
  process.env.API_URL_SUB || 'http://api-java.dev-hrm.nals.vn/api';
>>>>>>> feature/HRM-95-responsive-for-website

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
