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
