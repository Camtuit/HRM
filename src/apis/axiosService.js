import axios from 'axios';
import { handleResponse, handleError } from '../helpers/apiHelper';

const baseURL = 'http://api-java.dev-hrm.nals.vn/api';

export const instanceAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function callApi(config) {
  return instanceAxios(config).then(handleResponse).catch(handleError);
}
