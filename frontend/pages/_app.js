import App from 'next/app';
import Head from 'next/head';
import { fetchAPI } from '/utils/api';
import { getStrapiMedia } from '/utils/media';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';
import { theme } from '/assets/styles/theme';
import { GlobalStyle } from '/assets/styles/GlobalStyle';
import ErrorPage from 'next/error';

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  if (global == null) {
    return <ErrorPage statusCode={404} />;
  }

  const { defaultSeo } = global;

  return (
    <>
      <Head>{<link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />}</Head>
      <DefaultSeo
        titleTemplate={`%s | ${defaultSeo.metaTitleSuffix}`}
        title={defaultSeo.metaTitle}
        description={defaultSeo.metaDescription}
        openGraph={{
          images: Object.values(defaultSeo.shareImage.formats).map((image) => {
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
