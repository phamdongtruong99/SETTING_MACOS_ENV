export const pipe = (...functions) => initialValue =>
  functions.reduce((value, fn) => fn(value), initialValue);

// const mathSequence = pipe(
//     (x) => x * 2,
//     (x) => x - 1,
//     (x) => x * 3
//   );

// mathSequence(1); // 3
// mathSequence(2); // 9
// mathSequence(3); // 15

export const zip = (list1, list2) => {
  const sourceList = list1.length > list2.length ? list2 : list1;

  return sourceList.reduce((acc, _, index) => {
    const value1 = list1[index];
    const value2 = list2[index];

    acc.push([value1, value2]);

    return acc;
  }, []);
};

// zip([1, 3], [2, 4]);  // [[1, 2], [3, 4]]
//zip(['Decode', 'secret'], ['this', 'message!']); => // [['Decode', 'this'], ['secret', 'message!']]

export const intersperse = (separator, list) =>
  list.reduce((acc, value, index) => {
    if (index === list.length - 1) {
      acc.push(value);
    } else {
      acc.push(value, separator);
    }

    return acc;
  }, []);

// intersperse('Batman', [1, 2, 3, 4, 5, 6]);
// => [1, 'Batman', 2, 'Batman', 3, 'Batman', 4, 'Batman', 5, 'Batman', 6]

// intersperse('Batman', []);
// => []

export const insert = (index, newItem, list) => {
  if (index > list.length - 1) {
    return [...list, newItem];
  }

  return list.reduce((acc, value, sourceArrayIndex) => {
    if (index === sourceArrayIndex) {
      acc.push(newItem, value);
    } else {
      acc.push(value);
    }

    return acc;
  }, []);
};

// insert(0, 'Batman', [1, 2, 3]);
//  => ['Batman', 1, 2, 3]

// insert(1, 'Batman', [1, 2, 3]);
//  => [1, 'Batman', 2, 3]

//insert(2, ['Batman'], [1, 2, 3]);
// => [1, 2, ['Batman'], 3]
