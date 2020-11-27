import axios from 'axios';

const subBaseURL =
  process.env.API_URL_SUB || 'http://api-java.dev-hrm.nals.vn/api';

const factories = {
  requestGetSkillList: (data) => {
    return axios({
      method: 'GET',
      url: `${subBaseURL}/skills`,
      params: data,
    });
  },
  requestGetSkillDetail: (id) => {
    return axios({
      method: 'GET',
      url: `${subBaseURL}/skills/${id}`,
      params: id,
    });
  },
};

export default factories;
