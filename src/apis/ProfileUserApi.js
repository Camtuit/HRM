import { RESPONSE_CODE } from '../constants/errorText';
import axiosClientPHP from '../helpers/tempHelperApiPHP';

export async function fetchUserDetail(id) {
  try {
    return await axiosClientPHP.get(`users/${id}`, {
      id,
    });
  } catch (e) {
    return RESPONSE_CODE[404];
  }
}
