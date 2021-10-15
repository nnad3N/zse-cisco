import PropTypes from 'prop-types';
import { pagePropsShape } from 'types/appTypes';
import LoadingProvider from 'providers/LoadingProvider';
import { useRouter } from 'next/router';
import 'public/nprogress.css';
import App from 'next/app';
import Head from 'next/head';
import { fetchAPI } from 'utils/api';
import { getStrapiMedia } from 'utils/media';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import ErrorPage from 'next/error';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { global } = pageProps;

  if (global == null) {
    return <ErrorPage statusCode={404} />;
  }

  const {
    favicon,
    defaultSeo: { metaTitleSuffix, metaTitle, metaDescription, sharedImage },
  } = global;

  return (
    <>
      <Head>{<link rel="shortcut icon" href={getStrapiMedia(favicon)} />}</Head>
      <DefaultSeo
        titleTemplate={`%s | ${metaTitleSuffix}`}
        title={metaTitle}
        description={metaDescription}
        openGraph={{
          ...(sharedImage &&
            sharedImage.formats && {
              images: Object.values(sharedImage.formats).map((image) => {
                return {
                  url: getStrapiMedia(image),
                  width: image.width,
                  height: image.height,
                };
              }),
            }),
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoadingProvider router={router}>
          <Component {...pageProps} />
        </LoadingProvider>
      </ThemeProvider>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: pagePropsShape,
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
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI('/global');

  return { ...appProps, pageProps: { global } };
};

export default MyApp;
