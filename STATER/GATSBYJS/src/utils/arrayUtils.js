// --------Reverse Array But don't mutate origin array-------------
// eslint-disable-next-line import/prefer-default-export
export const reverseArr = arr => arr.map(arr.pop, [...arr]);
