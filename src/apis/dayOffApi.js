import { RESPONSE_CODE } from '../constants/errorText';
import axiosClient from '../helpers/axiosClient';

export async function displayDayOff(params) {
  try {
    return await axiosClient.get('days-off', {
      params,
    });
  } catch (e) {
    return RESPONSE_CODE[404];
  }
}

export async function createDayOff(dayoffs) {
  try {
    return await axiosClient.post('days-off', dayoffs);
  } catch (e) {
    return RESPONSE_CODE[409];
  }
}

export async function editDayOffById(dayOffId, dayoffs) {
  try {
    return await axiosClient.put(`days-off/${dayOffId}`, dayoffs);
  } catch (e) {
    return RESPONSE_CODE[409];
  }
}

export async function deleteDayOffById(dayOffId) {
  try {
    return await axiosClient.delete(`days-off/${dayOffId}`);
  } catch (e) {
    return e;
  }
}

export async function fetchDayOffById(dayOffId) {
  try {
    return await axiosClient.get(`days-off/${dayOffId}`);
  } catch (e) {
    return e;
  }
}
