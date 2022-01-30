import axios from 'axios';

export const request = (
  method,
  baseURL,
  queryParams,
  body,
  headers,
  isMultipart = false
) => {
  const config = {};
  const accessToken = sessionStorage.getItem('accessToken');
  if (accessToken) {
    config.headers = {
      Authorization: accessToken,
    };
  }

  if (headers) {
    config.headers = {
      ...config.headers,
      ...headers,
    };
  }

  if (isMultipart) {
    config.headers = {
      ...config.headers,
      'content-type': 'multipart/form-data',
    };
  }

  if (queryParams) {
    config.params = {
      ...config.params,
      ...queryParams,
    };
  }

  switch (method) {
    case 'get':
      return axios.get(baseURL, config);
    case 'post':
      return axios.post(baseURL, body, config);
    case 'put':
      return axios.put(baseURL, body, config);
    case 'delete':
      return axios.delete(baseURL, config);
    default:
      return axios.get(baseURL, config);
  }
};

export default request;
