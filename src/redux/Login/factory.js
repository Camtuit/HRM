import axios from 'axios';
const factories = {
  Login: (data) => {
    const url = process.env.API_URL || 'http://api-php.dev-hrm.nals.vn/api';
    console.log(data);
    return axios({
      method: 'POST',
      url: `${url}/auth/login`,
      data,
    });
  },
};

export default factories;
