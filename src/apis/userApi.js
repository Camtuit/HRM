import axios from 'axios';
import { RESPONSE_CODE } from '../constants/errorText';
import axiosClientPHP from '../helpers/tempHelperApiPHP';
import axiosClient from '../helpers/axiosClient';

export async function displayUsers(
  full_name,
  contract_status,
  contract_date_end_from,
  contract_date_end_to,
  active,
  page,
  sort,
  direct,
) {
  try {
    return await axiosClientPHP.get('users', {
      params: {
        full_name,
        contract_status,
        contract_date_end_from,
        contract_date_end_to,
        active,
        page,
        sort,
        direct,
      },
    });
  } catch (e) {
    return RESPONSE_CODE[404];
  }
}

export async function changeUserStatusById(userId) {
  const token = localStorage.getItem('token');
  try {
    return await axios({
      method: 'patch',
      url: `http://api-php.dev-hrm.nals.vn/api/users/${userId}`,
      headers: { authorization: `Bearer ${token}` },
    });
  } catch (e) {
    return e;
  }
}
export async function UploadAvatarUser(userId, avatar) {
  console.log(avatar);
  const params = {
    avatar: avatar,
  };
  try {
    return await axiosClientPHP.put(`users/${userId}`, params);
  } catch (e) {
    return RESPONSE_CODE[409];
  }
}
