export const deepCopy = (input) => {
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

export const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

export const isPlainObject = (val) =>
  !!val && typeof val === 'object' && val.constructor === Object;

export const isObjectLike = (value) => {
  return typeof value === 'object' && value !== null;
};

//isPlainObject({ a: 1 }); // true
//isPlainObject(new Map()); // false

export const hasAllKeys =
  <T>(obj: Record<string, any>, cls: new () => T): obj is T => {
    const properties = Object.keys(new cls());
    for (const p of properties) {
      if (!(p in obj)) return false;
    }
    return true;
  };

// https://dev.to/judehunter/the-caveats-and-solutions-to-generic-type-guards-in-typescript-2o7a?utm_source=dormosheio&utm_campaign=dormosheio

const objectToArray = (object) => {
  return Object.keys(object).map((e) => object[e]);
};

// objectToArray({
//   '11': { id: '1', text: 'please add code examples' },
//   '22': { id: '2', text: 'examples would be great for this article' },
//   '33': { id: '3', text: 'hi there' },
// }) = [ { id: '1', text: 'please add code examples' },
// { id: '2', text: 'examples would be great for this article' },
// { id: '3', text: 'hi there' } ]

export const isNull = (value) => {
  return value === null || value === undefined;
};

export const isValidParams = (value) => {
  return value !== '' && value !== undefined;
};

export const convertObjToSearchStr = (params) =>
  `?${Object.keys(params)
    .map((key) =>
      isValidParams(params[key]) ? `${key}=${JSON.stringify(params[key])}` : '',
    )
    .filter((data) => data !== '')
    .join('&')}`;

// convertObjToSearchStr({ limit: 20, abc: 30, fka: 40 }); => ?limit=20&abc=30&kfa=h4

export const convertObjToSearchEncodeStr = (params) =>
  `?${Object.keys(params)
    .map((key) =>
      isValidParams(params[key])
        ? `${encodeURIComponent(key)}=${encodeURIComponent(
            JSON.stringify(params[key]),
          )}`
        : '',
    )
    .filter((data) => data !== '')
    .join('&')}`;

// convertObjToSearchStr({ limit: 20, abc: 30, fka: 40 }); => ?limit=20&abc=30&kfa=h4

const getKeys = (obj, arr = []) => {
  // gán giá trị mặc định cho arr là []
  for (let i in obj) {
    // Loop qua mãng
    arr.push(i); // push key vào mãng đó
    if (typeof obj[i] === 'object') {
      // Kiểm tra xem value của mãng đó có phải object ko
      getKeys(obj[i], arr); // Nếu phải thì đệ quy lại
      return arr;
    }
  }
};
// getKeys({
//   bedroom: {
//     area: 20,
//     bed: {
//       type: 'twin-bed',
//       price: 100
//     }
//   }
// }) => ['bedroom', 'area', 'bed', 'type', 'price'];

export const hasKeys =
  <T>(
    obj: Record<string, any>,
    properties: (keyof T)[]
  ): obj is T =>
    properties.filter(p => p in obj).length == properties.length;
    // functional approach
// https://dev.to/judehunter/the-caveats-and-solutions-to-generic-type-guards-in-typescript-2o7a?utm_source=dormosheio&utm_campaign=dormosheio

export const hasAllKeys =
  <T>(obj: Record<string, any>, cls: new () => T): obj is T => {
    const properties = Object.keys(new cls());
    for (const p of properties) {
      if (!(p in obj)) return false;
    }
    return true;
  };
