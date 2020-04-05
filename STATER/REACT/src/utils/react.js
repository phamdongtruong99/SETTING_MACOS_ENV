import { Children, cloneElement } from 'react';

/**
 * Joins React children using a separator.
 */
export function joinChildren(children, separator) {
  const childrenArray = Children.toArray(children);
  const lastChildIndex = childrenArray.length - 1;
  let separatorIndex = -1;
  return childrenArray.reduce((result, child, index) => {
    if (index < lastChildIndex) {
      separatorIndex += 1;
      return result.concat([
        child,
        typeof separator === 'function'
          ? separator(separatorIndex)
          : cloneElement(separator, { key: `separator-${separatorIndex}` }),
      ]);
    } else {
      return result.concat(child);
    }
  }, []);
}
