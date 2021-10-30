import PropTypes from 'prop-types';

export const pagePropsShape = PropTypes.shape({
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
});
