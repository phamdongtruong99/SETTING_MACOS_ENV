import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_URL,
});

const request = method => {};

// GET

export const get = (url, isAuth = true) => {
  if (isAuth) {
    return api.get(url, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return api.get(url, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

// POST, PUT, PATCH

export const post = (url, isAuth = true) => {
  if (isAuth) {
    return api.post(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return api.post(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
