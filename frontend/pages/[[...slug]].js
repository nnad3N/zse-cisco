import PropTypes from 'prop-types';
import { fetchAPI } from 'utils/api';
import Layout from 'components/templates/Layout/Layout';
import Seo from 'components/strapi/seo';
import Sections from 'components/strapi/sections';
import { getPageData } from 'utils/getPageData';
import ErrorPage from 'next/error';

const DynamicPage = ({ sections, navigation, footer, seo }) => {
  if (!sections?.length) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout navigation={navigation} footer={footer}>
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
  const { data } = await fetchAPI('/api/pages');

  const paths = data.map(({ attributes }) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = !attributes.slug ? false : attributes.slug.split('/');

    return {
      params: { slug: slugArray },
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData({ slug: !params.slug ? [''] : params.slug });
  const navigation = await fetchAPI('/api/navigation?populate[logo][populate]=*&populate[navLinks][populate]=*');
  const footer = await fetchAPI('/api/footer?populate=*');

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} };
  }

  const { content, seo } = pageData;

  return {
    props: {
      sections: content,
      seo,
      navigation: navigation.data.attributes,
      footer: footer.data.attributes,
    },
  };
}

export default DynamicPage;
