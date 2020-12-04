/* eslint-disable */
// import moment from 'moment';

export const formatUnixToDate = unit => moment.unix(unit).format();

export const safeParseJSON = str => {
  let result = null;
  try {
    result = JSON.parse(str);
  } catch (e) {
    console.error('Failed to parse JSON', e);
  }
  return result;
};

// link: https://thefullsnack.com/posts/0x0b.html

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

export const formatMoney = (number, n = 2, x = 3) => {
  const re = `\\d(?=(\\d{${x}})+${n > 0 ? '\\.' : '$'})`;
  return Number(number)
    .toFixed(Math.max(0, ~~n))
    .replace(new RegExp(re, 'g'), '$& ');
};

// export const fromNow = date => {
//   return moment(date).fromNow();
// };

export const toRandomCase = str => Array.from(
  str, 
  c => (Math.random() < 0.5 ? c.toUpperCase() : c.toLowerCase())).join('');

// toRandomCase('Tran Thai Son'); // 'traN ThaI son'

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

export const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

// capitalize('fooBar'); // 'FooBar'

export const isEmpty = value =>
  value === undefined || value === null || value === '';

// isEmpty(''); // true
// isEmpty(undefined) // true
// isEmpty(null) // true
// isEmpty('12') // false

export const splitCamelCase = str => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
}

// splitCamelCase('camelCase') => 'camel Case'

export const findLongestWord = str => {
  var longestWord = str.split(' ').sort(function(a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
};

// findLongestWord('The quick brown fox jumped over the lazy dog'); => jumped

export const removeSpace = str => str.replace(/\s/g, '');

export const encodeJsonToURI = params => {
  return Object.keys(params)
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');
};

export const formatDate = (text, type = 'DD/MM/YY') => {
  return text ? moment(text).format(type) : moment().format(type);
};

// formatDate(2019-12-15T00:00:00Z) => 15/12/2019

export const formatDateUTC = (text, type = 'DD/MM/YY') => {
  return text ? moment.utc(text).format(type) : moment().format(type);
};

export const generateRandomAlphaNum = length => {
  let rdmString = '';
  while (rdmString.length < length) {
    rdmString += Math.random()
      .toString(36)
      .substr(2);
  }
  return rdmString.substr(0, length);
};

// generateRandomAlphaNum(10) => bsgxfn3w8o

export const compactString = (str, length = 5) => {
  return `${str.slice(0, length)}...`;
};

// compactString('abcasasgasg', 5) => abcas...

export const generateHex = () => {
  return `#${Math.floor(Math.random() * 256 ** 3)
    .toString(16)
    .padStart(6, '0')}`;
};

// generateHex() => #fff123

export const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

// stripHTMLTags('<p><em>Hello</em></p>) => Hello

export const bytesToSize = bytes => {
  if (bytes === 0) return '0 B';

  var k = 1024;
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
};

// bytesToSize(12) => "12.0 B"

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const sortWord = str => [...str].sort().join('');

// sortWord('abc') => 'cba'

export const longestWord = sentence => {
  return sentence
    .split(' ')
    .sort((word, nextWord) => nextWord.length - word.length)[0];
};

// longestWord("Njoku Samson Ebere"); // Samson

export const hammingDistance = (word, matchingWord) => {
  let count = 0;

  if (word.length === matchingWord.length) {
    for (let i = 0; i <= word.length; i++) {
      if (word.toLowerCase()[i] !== matchingWord.toLowerCase()[i]) {
        count++;
      }
    }

    return count;
  }
  return 'unequal word lengths';
};

// hammingDistance('part', 'path'); // 2
// hammingDistance('ebere', 'samson'); // 'unequal word lengths'

export const wordPalindrome = word => {
  let lowerCasedWord = word.toLowerCase();
  let newWord = [...lowerCasedWord].reduce((total, acc) => acc + total);

  if (newWord === lowerCasedWord) {
    return true;
  }
  return false;
};

// wordPalindrome('Racecar'); // true
// wordPalindrome('Race car'); // false

export const vowelsCounter = text => {
  let counter = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of [...text]) {
    if (vowels.includes(char)) {
      counter++;
    }
  }

  return counter;
};

// vowelsCounter('tran) => 1

export const removeExclamationMarks = str => {
  return str.replace(/!/g, '');
};

// removeExclamationMarks('HelloWorld!!') => HelloWorld

export const isPangram = str => {
  str = str.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(e => {
    return str.includes(e);
  });
};

// isPangram('qwertyuiopasdfghjklzxcvbnm') => true

export const round10 = (number: number): number => Math.round(number * 10) / 10;
// 10.423 => 10.42

const STEP_GUTTER = 4;

export const gutters = {
  custom: (size: number): number => STEP_GUTTER * size,
  xxxs: STEP_GUTTER,
  xxs: STEP_GUTTER * 2,
  xs: STEP_GUTTER * 3,
  sm: STEP_GUTTER * 4,
  md: STEP_GUTTER * 5,
  lg: STEP_GUTTER * 6,
  xl: STEP_GUTTER * 7,
  xxl: STEP_GUTTER * 8,
  xxxl: STEP_GUTTER * 9,
};

export function slugify(text: string): string {
  return text
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -
}

// slugify("Chao ban") => chao-ban
