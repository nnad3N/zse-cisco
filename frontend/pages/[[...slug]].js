import { fetchAPI } from '/utils/api';
import Layout from '/components/templates/Layout';
import Seo from '/components/strapi/seo';
import Sections from '/components/strapi/sections';
import { getPageData } from '/utils/getPageData';

const DynamicPage = ({ sections, pageContext, navigation }) => {
  //   const seo = {
  //     metaTitle: category.name,
  //     metaDescription: `All ${category.name} articles`,
  //   }
  return (
    <Layout pageContext={pageContext} navigation={navigation}>
      {/* <Seo seo={seo} /> */}
      <Sections sections={sections} />
    </Layout>
  );
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

  return {
    props: {
      sections: pageData.content,
      navigation,
    },
  };
}

export default DynamicPage;
