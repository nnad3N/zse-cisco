import App from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import { fetchAPI } from '/utils/api';
import { getStrapiMedia } from '/utils/media';
import { ThemeProvider } from 'styled-components';
import { theme } from '/assets/styles/theme';
import { GlobalStyle } from '/assets/styles/GlobalStyle';
// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>{/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} /> */}</Head>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={global}>
          <GlobalStyle />
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </ThemeProvider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI('/global');
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
