import { post, get } from './utils';

export async function loginApi(payload) {
  return post(`/auth/signin`, payload, 'https://netjs.herokuapp.com');
}

export async function getInfoApi() {
  return get(`/auth/info`);
}
