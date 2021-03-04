import { history } from 'redux/store';
import { isObject } from './object';
//@ts-ignore
import TinyURL from 'tinyurl'


export const updateHashUrl = (hash = '') => {
  if (!history) return;
  const { location } = history;
  history.push({ ...location, hash });
};

export const updateSearchUrl = (search = '') => {
  if (!history) return;
  const { location } = history;
  history.push({ ...location, search });
};

export const convertJsonToQueryString = params => {
  return Object.keys(params)
    .map(
      k =>
        `${encodeURIComponent(k)}=${encodeURIComponent(
          isObject(params[k]) ? JSON.stringify(params[k]) : params[k],
        )}`,
    )
    .join('&');
};

export const URLJoin = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');

// URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'); // 'http://www.google.com/a/b/cd?foo=123&bar=foo'

export const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

// isAbsoluteURL('https://google.com'); // true
// isAbsoluteURL('www.example.com'); // false

export const isURL = path =>
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(
    path,
  );

// isURL('https://google.com'); // true
// isURL('www.example.com'); // true

export const getQueryParams = (params, url) => {
  let href = url;
  //this expression is to get the query strings
  let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
  let queryString = reg.exec(href);
  return queryString ? queryString[1] : null;
};

// getQueryParams('data', 'http://another-example.com?example=something&data=13'); // "13"

export const getQueryAllParams = url => {
  let queryParams = {};
  //create an anchor tag to use the property called search
  let anchor = document.createElement('a');
  //assigning url to href of anchor tag
  anchor.href = url;
  //search property returns the query string of url
  let queryStrings = anchor.search.substring(1);
  let params = queryStrings.split('&');

  for (var i = 0; i < params.length; i++) {
    var pair = params[i].split('=');
    queryParams[pair[0]] = decodeURIComponent(pair[1]);
  }
  return queryParams;
};

// getQueryAllParams('http://another-example.com?example=something&data=13'); //{"example": "something", "data": 13}

export const getQueryString = url => {
  return url.split('?')[1];
};

// getQueryString // http://codexworld.com/index.php?type=product&id=1234 => type=product&id=1234

export const convertParamsToObject = url => {
  const vars = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
};

// convertParamsToObject('?a=1&b=2') => { a: '1' , b:'2'}

export const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {},
  );

// getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}
// getURLParameters('google.com'); // {}

export const domainName = url => {
  return url.replace(/https*:\/\/|www\./g, '').split('.')[0];
};

// domainName("http://www.youtube.com") => youtube

export const getSubdomain = (): string => window.location.hostname.split('.')[0] || 'localhost';

export const getFirstPathParam = (path: string): string => path.split('/').filter((pathParam) => !!pathParam)[0];

export const shortenURLS = async (
  urls: string[]
): Promise<{ original: string; shorten: string }[]> => {
  const tinyURLS = []
  for (let url of urls) {
    const res = await TinyURL.shorten(url)
    tinyURLS.push({
      original: url,
      shorten: res,
    })
  }
  return tinyURLS
}

export const getBrowserUrl = (): string => {
	return window?.location?.href;
};

export const replaceBrowserUrl = (url: string) => {
	if (window?.history?.replaceState) {
		window.history.replaceState(null, '', url);
	}
};
	     
export const removeURLParrameter = (): void =>
  global.history.replaceState(null, document.title, global.location.pathname)
