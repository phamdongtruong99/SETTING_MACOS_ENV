import { useState, useEffect } from 'react';

export default function useTheme(
  defaultTheme = { mode: 'light', textZoom: 'normal' },
) {
  const [theme, setTheme] = useState(getInitialTheme);
  function getInitialTheme() {
    const savedTheme = window.localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  }

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  const toggleDarkMode = () => {
    setTheme(
      theme.mode === 'dark'
        ? { ...theme, mode: 'light' }
        : { ...theme, mode: 'dark' },
    );
  };

  const toggleSizeMode = () => {
    setTheme(
      theme.textZoom === 'normal'
        ? { ...theme, textZoom: 'magnify' }
        : { ...theme, textZoom: 'normal' },
    );
  };

  return { ...theme, toggleDarkMode, toggleSizeMode };
}

// Example: https://codesandbox.io/s/dark-mode-3tylu
