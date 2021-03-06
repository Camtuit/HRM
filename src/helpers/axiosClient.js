/* eslint-disable no-param-reassign */
import axios from 'axios';

const subBaseURL =
  process.env.API_URL_SUB || 'http://api-java.dev-hrm.nals.vn/api';
const axiosClient = () => {
  const defaultOptions = {
    baseURL: subBaseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
  });

  return instance;
};

export default axiosClient();
