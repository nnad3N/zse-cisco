import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

const Seo = ({ seo }) => {
  // Prevent errors if no metadata was set
  if (!seo) return null;
  const { metaTitle, metaDescription } = seo;

  return <NextSeo title={metaTitle} description={metaDescription} />;
};

Seo.propTypes = {
  seo: PropTypes.shape({
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
  }).isRequired,
};

export default Seo;
