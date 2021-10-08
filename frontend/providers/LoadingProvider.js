// import { LoadingContext } from 'pages/_app'
import { useState, useEffect, createContext } from 'react';
import NProgress from 'nprogress';

export const LoadingContext = createContext(false);

const LoadingProvider = ({ children, router }) => {
  const [isLoading, setIsLoading] = useState(false);

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

  return <LoadingContext.Provider value={isLoading}>{children}</LoadingContext.Provider>;
};

export default LoadingProvider;
