import PropTypes from 'prop-types';
import { fetchAPI } from 'utils/api';
import Layout from 'components/templates/Layout';
import Seo from 'components/strapi/seo';
import Sections from 'components/strapi/sections';
import { getPageData } from 'utils/getPageData';
import ErrorPage from 'next/error';

const DynamicPage = ({ sections, navigation, seo }) => {
  if (!sections?.length) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout navigation={navigation}>
      <Seo seo={seo} />
      <Sections sections={sections} />
    </Layout>
  );
};

DynamicPage.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.object,
  seo: PropTypes.object,
};

export async function getStaticPaths() {
  const pages = await fetchAPI('/pages');

  const paths = pages.map((page) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = !page.slug ? false : page.slug.split('/');

    return {
      params: { slug: slugArray },
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData({ slug: !params.slug ? [''] : params.slug });
  const navigation = await fetchAPI('/navigation');

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} };
  }

  const { content, seo } = pageData;

  return {
    props: {
      sections: content,
      seo,
      navigation,
    },
  };
}

export default DynamicPage;
