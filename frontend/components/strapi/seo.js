import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { getStrapiMedia } from '/utils/media';

const Seo = ({ seo }) => {
  const { metaTitle, metaDescription } = seo;

  // Prevent errors if no metadata was set
  if (!seo) return null;

  return <NextSeo title={metaTitle} description={metaDescription} />;
};

Seo.propTypes = {
  seo: PropTypes.shape({
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
    shareImage: PropTypes.object,
  }),
};

export default Seo;
