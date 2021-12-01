import { useState, useEffect } from 'react';

const useDarkMode = (state = false) => {
  useEffect(() => {
    const defaultDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || state;

    if (localStorage.getItem('darkMode') === null) {
      localStorage.setItem('darkMode', defaultDarkMode);
    }
    setCurrentDarkMode(JSON.parse(localStorage.getItem('darkMode')));
  }, []);

  const [currentDarkMode, setCurrentDarkMode] = useState(state);

  const handleDarkModeChange = () => {
    setCurrentDarkMode((prevState) => !prevState);
    localStorage.setItem('darkMode', !currentDarkMode);
  };

  return {
    currentDarkMode,
    handleDarkModeChange,
  };
};

export default useDarkMode;
