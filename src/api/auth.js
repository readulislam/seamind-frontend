import api, { commonThenResult } from './index';

export const END_POINTS = {
  LOG_IN: () => '/auth/login',
  REGISTER: () => '/auth/register',
};

export const logInApi = async (inputData) => {
  const structures = await api.post(END_POINTS.LOG_IN(), inputData);
  return commonThenResult(structures);
};
export const registerApi = async (inputData) => {
  const structures = await api.post(END_POINTS.REGISTER(), inputData);
  return commonThenResult(structures);
};
