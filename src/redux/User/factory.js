import axios from 'axios';

const factories = {
  UserList: (data) => {
    const url = process.env.API_URL || 'http://api-php.dev-hrm.nals.vn/api';
    console.log(data);
    return axios({
      method: 'GET',
      url: `${url}/users`,
      data,
    });
  },
};

export default factories;
