import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import '../public/nprogress.css';
import App from 'next/app';
import Head from 'next/head';
import { fetchAPI } from '/utils/api';
import { getStrapiMedia } from '/utils/media';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import ErrorPage from 'next/error';

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  if (global == null) {
    return <ErrorPage statusCode={404} />;
  }

  const {
    favicon,
    defaultSeo: { metaTitleSuffix, metaTitle, metaDescription, sharedImage },
  } = global;

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
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

  return (
    <>
      <Head>{<link rel="shortcut icon" href={getStrapiMedia(favicon)} />}</Head>
      <DefaultSeo
        titleTemplate={`%s | ${metaTitleSuffix}`}
        title={metaTitle}
        description={metaDescription}
        openGraph={{
          images: Object.values(sharedImage.formats).map((image) => {
            return {
              url: getStrapiMedia(image),
              width: image.width,
              height: image.height,
            };
          }),
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({
    global: PropTypes.shape({
      defaultSeo: PropTypes.shape({
        id: PropTypes.number,
        metaDescription: PropTypes.string.isRequired,
        metaTitle: PropTypes.string.isRequired,
        metaTitleSuffix: PropTypes.string,
        sharedImage: PropTypes.object,
      }),
      favicon: PropTypes.object,
      id: PropTypes.number,
    }),
    navigation: PropTypes.object,
    sections: PropTypes.arrayOf(PropTypes.object),
    seo: PropTypes.object,
  }),
};

MyApp.defaultProps = {
  pageProps: {
    global: {
      defaultSeo: {
        metaDescription: 'Akademia Cisco w Zespole Szkół Elektronicznych w Radomiu',
        metaTitle: 'Akademia Cisco',
        metaTitleSuffix: 'Zespół Szkół Elektronicznych',
      },
    },
  },
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
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
