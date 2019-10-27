import { useEffect, useState } from 'react';

export const useDebounce = (text, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(text);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(text);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [text]);

  return debouncedValue;
};
