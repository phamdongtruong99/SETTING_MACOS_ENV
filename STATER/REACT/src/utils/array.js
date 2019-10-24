export const reverseArr = arr => arr.map(arr.pop, [...arr]);

// reverseArr([1, 2, 3]); // [3, 2, 1]

export const takeArr = (arr, n = 1) => arr.slice(0, n);

// takeArr([1, 2, 3], 5); // [1, 2, 3]
// takeArr([1, 2, 3], 0); // []

export const takeArrRight = (arr, n = 1) =>
  arr.slice(arr.length - n, arr.length);

// takeArrRight([1, 2, 3], 2); // [ 2, 3 ]
// takeArrRight([1, 2, 3]); // [3]

export const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

// tail([1, 2, 3]); // [2,3]
// tail([1]); // [1]

export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
// sum(1, 2, 3, 4); // 10
// sum(...[1, 2, 3, 4]); // 10

export const uniqueElements = arr => [...new Set(arr)];

// uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]

export const flattenArr = arr => {
  const flattened = [].concat(...arr);
  return flattened.some(item => Array.isArray(item))
    ? flattenArr(flattened)
    : flattened;
};

// const arr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
// const flatArr = flattenArray(arr);
//=> [11, 22, 33, 44, 55, 66, 77, 88, 99]

export const getKey = (arr, keyField) => arr.map(item => item[keyField]);

export const keyBy = (arr, keyField) =>
  Object.assign({}, ...arr.map(item => ({ [item[keyField]]: item })));

export const convertGetAllData = (response, key = '_id') => {
  return {
    data: keyBy(response, key),
    ids: getKey(response && response.map(data => data[key])),
  };
};

// https://repl.it/repls/ScaryOptimalCharmap

export const findLast = (array, fn) => {
  return reverseArr(array).find(fn);
};

// findLast([1, 2, 3, 4], n => n % 2 == 1) // -> 3
