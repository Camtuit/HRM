import { RESPONSE_CODE } from '../constants/errorText';
import axiosClient from '../helpers/axiosClient';

export async function displaySkills(page, name) {
  try {
    return await axiosClient.get('skills', {
      params: {
        page,
        name,
      },
    });
  } catch (e) {
    return RESPONSE_CODE[404];
  }
}

export async function createSkill(skill) {
  try {
    return await axiosClient.post('skills', skill);
  } catch (e) {
    return RESPONSE_CODE[409];
  }
}

export async function editSkillById(skillId, skill) {
  try {
    return await axiosClient.put(`skills/${skillId}`, skill);
  } catch (e) {
    return RESPONSE_CODE[409];
  }
}

export async function deleteSkillById(skillId) {
  try {
    return await axiosClient.delete(`skills/${skillId}`);
  } catch (e) {
    return e;
  }
}

export async function fetchSkillById(skillId) {
  try {
    return await axiosClient.get(`skills/${skillId}`);
  } catch (e) {
    return e;
  }
}
