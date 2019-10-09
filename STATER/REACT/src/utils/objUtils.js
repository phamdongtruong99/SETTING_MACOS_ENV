export const deepCopy = input => {
  if (input == null || typeof input != 'object') return input;
  const output = Array.isArray(input) ? [] : {};
  const keys = Object.keys(input);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof input[keys[i]] === 'object') {
      output[key] = deepCopy(input[key]);
    } else {
      output[key] = input[key];
    }
  }
  return output;
};

export const isObject = value => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};
