/* eslint-disable */
// import moment from 'moment';

// export const formatUnixToDate = unit => moment.unix(unit).format();

export const upperFirstChar = text => {
  return text.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
};
export const lowerFirstChar = text => {
  return text.charAt(0).toLowerCase() + text.substr(1);
};
export const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, 'g'), replacement);
};

export const makeActionName = text => {
  return lowerFirstChar(
    replaceAll(
      upperFirstChar(replaceAll(text, '_', ' ').toLowerCase()),
      ' ',
      '',
    ),
  );
};

export const formatMoney = (number, n = 2, x = 3) => {
  const re = `\\d(?=(\\d{${x}})+${n > 0 ? '\\.' : '$'})`;
  return Number(number)
    .toFixed(Math.max(0, ~~n))
    .replace(new RegExp(re, 'g'), '$& ');
};

// export const fromNow = date => {
//   return moment(date).fromNow();
// };

export const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

// toKebabCase('camelCase'); // 'camel-case'
// toKebabCase('some text'); // 'some-text'

export const toCamelCase = str => {
  let s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

// toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'
// toCamelCase('some-javascript-property'); // 'someJavascriptProperty'

export const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

// toSnakeCase('camelCase'); // 'camel_case'
// toSnakeCase('some text'); // 'some_text'

export const toTitleCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');

// toTitleCase('some_database_field_name'); // 'Some Database Field Name'
// toTitleCase('some-package-name'); // 'Some Package Name'

export const reverseString = str => [...str].reverse().join('');

// reverseString('foobar'); // 'raboof'

export const words = (str, pattern = /[^a-zA-Z-]+/) =>
  str.split(pattern).filter(Boolean);

// words('I love javaScript!!'); // ["I", "love", "javaScript"]

export const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase());

// capitalizeEveryWord('hello world!'); // 'Hello World!'

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

// capitalize('fooBar'); // 'FooBar'
