import { useState, useEffect, createContext } from 'react';
import NProgress from 'nprogress';

export const AppContext = createContext({
  isLoading: false,
  isNavOpen: false,
  setIsNavOpen: () => {},
});

const AppProvider = ({ children, router, handleDarkModeChange, currentDarkMode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  if (router) {
    useEffect(() => {
      const handleStart = () => {
        NProgress.configure({ parent: '#loader' });
        setIsLoading(true);
        NProgress.start();
      };
      const handleStop = () => {
        setIsLoading(false);
        NProgress.done();
      };

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleStop);
      router.events.on('routeChangeError', handleStop);

      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleStop);
        router.events.off('routeChangeError', handleStop);
      };
    }, [router]);
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isNavOpen,
        setIsNavOpen,
        handleDarkModeChange,
        currentDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
