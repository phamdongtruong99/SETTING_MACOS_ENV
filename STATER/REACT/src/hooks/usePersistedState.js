import { useState, useEffect } from 'react';

const usePersistedState = (name, defaultValue) => {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    const persistedValue = window.localStorage.getItem(name);

    return persistedValue !== null ? JSON.parse(persistedValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);

  return [value, setValue];
};

export default usePersistedState;
