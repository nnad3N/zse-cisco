import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { getStrapiMedia } from '/utils/media';

const Seo = ({ seo }) => {
  const { metaTitle, metaDescription, sharedImage } = seo;

  // Prevent errors if no metadata was set
  if (!seo) return null;

  return (
    <NextSeo
      title={metaTitle}
      description={metaDescription}
      openGraph={{
        // Title and description are mandatory
        title: metaTitle,
        description: metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        ...(sharedImage && {
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
  );
};

Seo.propTypes = {
  seo: PropTypes.shape({
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
    shareImage: PropTypes.object,
  }),
};

export default Seo;
