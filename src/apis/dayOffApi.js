import { RESPONSE_CODE } from '../constants/errorText';
import axiosClient from '../helpers/axiosClient';

export async function displaySkills(params) {
  try {
    return await axiosClient.get('dayoffs', {
      params,
    });
  } catch (e) {
    return RESPONSE_CODE[404];
  }
}

export async function createSkill(dayoffs) {
  try {
    return await axiosClient.post('dayoffs', dayoffs);
  } catch (e) {
    return RESPONSE_CODE[409];
  }
}

export async function editSkillById(dayOffId, dayoffs) {
  try {
    return await axiosClient.put(`dayoffs/${dayOffId}`, dayoffs);
  } catch (e) {
    return RESPONSE_CODE[409];
  }
}

export async function deleteSkillById(dayOffId) {
  try {
    return await axiosClient.delete(`dayoffs/${dayOffId}`);
  } catch (e) {
    return e;
  }
}

export async function fetchSkillById(dayOffId) {
  try {
    return await axiosClient.get(`skills/${dayOffId}`);
  } catch (e) {
    return e;
  }
}
