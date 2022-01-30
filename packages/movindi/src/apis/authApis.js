import request from '../networks';

const baseURL = '';

export const login = async (credentials) => {
  const url = baseURL + '/token';

  try {
    const response = await request('post', url, null, credentials, null);
    return response;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  sessionStorage.removeItem('accessToken');
};

export const signup = async (credentials) => {
  const url = baseURL + '/accounts/signup';

  try {
    const response = await request('post', url, null, credentials, null);
    return response;
  } catch (error) {
    throw error;
  }
};
