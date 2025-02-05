import cookie from 'js-cookie';

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/',
    });
  }
};

export const removeCookie = key => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

const getCookieFromBrowser = key => cookie.get(key);

const getCookieFromServer = (key, req) => {
  if (!req?.headers?.cookie) {
    return undefined;
  }
  const rawCookie =
    req &&
    req.headers &&
    req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};

export const getCookie = (key, req) =>
  process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);

// TODO: Token
export const getToken = (ctx = {}) => getCookie('token', ctx.req);
export const setToken = value => setCookie('token', value);
export const removeToken = () => removeCookie('token');

export const isAuthenticated = ctx => !!getToken(ctx);

export function parseCookie({ cookie, name = null }) {
  const res = cookie.split('; ').reduce((acc, curr) => {
    const cookie = curr.split('=');
    acc[cookie[0]] = cookie[1];
    return acc;
  }, {});

  if (name) return res[name];
  return res;
}

