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
