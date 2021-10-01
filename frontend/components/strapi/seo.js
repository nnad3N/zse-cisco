import { NextSeo } from 'next-seo';
import { getStrapiMedia } from '/utils/media';

const Seo = ({ metadata }) => {
  // Prevent errors if no metadata was set
  if (!metadata) return null;

  return (
    <NextSeo
      title={metadata.metaTitle}
      description={metadata.metaDescription}
      openGraph={{
        // Title and description are mandatory
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        ...(metadata.shareImage && {
          images: Object.values(metadata.shareImage.formats).map((image) => {
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

export default Seo;
