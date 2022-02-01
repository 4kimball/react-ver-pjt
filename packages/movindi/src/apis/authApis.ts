import request from '../networks';

const baseURL = 'http://127.0.0.1:8000/api/v1';

export const login = async (credentials: object) => {
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

export const signup = async (credentials: object) => {
  const url = baseURL + '/accounts/signup/';

  try {
    const response = await request('post', url, null, credentials, null);
    return response;
  } catch (error) {
    throw error;
  }
};
