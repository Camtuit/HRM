/* eslint-disable no-param-reassign */
import axios from 'axios';

const baseURL = 'http://api-php.dev-hrm.nals.vn/api';
const axiosClientPHP = () => {
  const headers = {};

  if (localStorage.getItem('token')) {
    headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  const instance = axios.create({
    baseURL,
    headers,
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.message === 'Request failed with status code 403') {
        window.location = '/error/403';
      }
      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
  });

  return instance;
};

export default axiosClientPHP();
