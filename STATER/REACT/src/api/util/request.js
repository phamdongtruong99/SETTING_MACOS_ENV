/* eslint-disable no-console */
import axios from 'axios';

const TIME_OUT = 10000;

const requiredParam = param => {
  throw new Error(`${param} parameter is required`);
};

export function getQueryString(params) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .filter(k => params[k] || params[k] === 0)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');
}

const request = method => async (
  resource = requiredParam('RESOURCE'),
  data = null,
  customURL = process.env.REACT_APP_SERVER_URL,
) => {
  try {
    const headers = {};
    const token = localStorage.getItem('sessionToken');
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }
    const response = await axios({
      baseURL: customURL,
      timeout: TIME_OUT,
      method,
      headers,
      url: resource,
      data,
    });
    return response.data;
  } catch (error) {
    console.error('Request Failed:', error.config);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error.response || error.message);
  }
};

export const get = request('get');
export const post = request('post');
export const put = request('put');
export const patch = request('patch');
export const del = request('delete');
