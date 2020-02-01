export const toDecimalMark = num => num.toLocaleString('en-US');

// toDecimalMark(12305030388.9087); // "12,305,030,388.909"

export const formatNumber = (number, format = '$&.', n, x) => {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return Number(number)
    .toFixed(Math.max(0, ~~n))
    .replace(new RegExp(re, 'g'), format);
};

// formatNumber(3560283); 3.560.283
// formatNumber(3560283, '$&,'); 3,560,283

export const compactNumber = (number = 0, n, x) => {
  const UNIT = ['', ' K', ' M', ' B'];
  let unitRank = 0;
  let tmpPrice = Math.abs(number);
  while (1) {
    tmpPrice = Number(tmpPrice) / 1000;
    unitRank += tmpPrice > 1 ? 1 : 0;
    if (tmpPrice < 1) break;
  }
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return `${number >= 0 ? '' : '-'}${Number(tmpPrice * 1000)
    .toFixed(1)
    .replace(new RegExp(re, 'g'), '$&,')}${UNIT[unitRank]}`;
};

// compactNumber(3000000);  // 3.0 M

export const formatOrdinalnumber = number => {
  return number < 10 ? `0${number}` : number;
};

// formatOrdinalnumber(1);   //01

export const isPowerOfFour = num => {
  let lg4 = Math.log(num) / Math.log(4);
  return lg4 === ~~lg4; // ~~(4.01) = 4 <=> Math.floor(4.01)
};

// isPowerOfFour(16)  => true

export const randomNumber = (min, max) => {
  return ~~(Math.random() * (max - min)) + min;
};

// randomNumber(1, 100) -> 11

export const formatNumberToMoney = (number, n = 0, x = 3) => {
  const re = `\\d(?=(\\d{${x}})+${n > 0 ? '\\.' : '$'})`;
  return `${Number(number)
    .toFixed(Math.max(0, ~~n))
    .replace(new RegExp(re, 'g'), '$&,')}đ`;
};

// formatNumberToMoney(2665): 2,655đ

export const currencyFormat = num => {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

// currencyFormat(2665)) // $2,665.00

export const isNumber = number => {
  return !isNaN(parseFloat(number)) && isFinite(number);
};

// isNumber(4) // true
// isNumber(4.4) // true
// isNumber('4') // false

export const randomFloatNumber = (minValue, maxValue, precision = 2) => {
  return parseFloat(
    Math.min(
      minValue + Math.random() * (maxValue - minValue),
      maxValue,
    ).toFixed(precision),
  );
};

export const isPalindromeNumber = number => {
  number = number.toString();
  if (number < 0) {
    return false;
  }
  let result = 0;
  let i = 0;
  let j = number.length - 1;
  while (i < j) {
    if (number[i] !== number[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

// isPalindromeNumber(123) false
// isPalindromeNumber(121) true

const reverseInt = n => {
  let result = 0;

  while (n !== 0) {
    result = result * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  if (result <= -2147483648 || result >= 2147483647) {
    return 0;
  }
  return result;
};

// reverseInt(1234) -> 4321
