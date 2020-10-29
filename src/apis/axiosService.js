import axios from 'axios';
import { handleResponse, handleError } from '../helpers/apiHelper';

const baseURL = process.env.API_URL;

export const instanceAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function callApi(config) {
  return instanceAxios(config).then(handleResponse).catch(handleError);
}
