import { RESPONSE_CODE } from '../constants/errorText';
import axiosClientPHP from '../helpers/tempHelperApiPHP';

export async function displayUsers(
  full_name,
  contract_status,
  contract_date_end_from,
  contract_date_end_to,
  page,
) {
  try {
    return await axiosClientPHP.get('users', {
      params: {
        full_name,
        contract_status,
        contract_date_end_from,
        contract_date_end_to,
        page,
      },
    });
  } catch (e) {
    return RESPONSE_CODE[404];
  }
}
