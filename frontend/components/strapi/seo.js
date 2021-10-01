import { NextSeo } from 'next-seo';
import { getStrapiMedia } from '/utils/media';

const Seo = ({ seo }) => {
  // Prevent errors if no metadata was set
  if (!seo) return null;

  return (
    <NextSeo
      title={seo.metaTitle}
      description={seo.metaDescription}
      openGraph={{
        // Title and description are mandatory
        title: seo.metaTitle,
        description: seo.metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        // ...(seo.shareImage && {
        //   images: Object.values(seo.shareImage.formats).map((image) => {
        //     return {
        //       url: getStrapiMedia(image),
        //       width: image.width,
        //       height: image.height,
        //     };
        //   }),
        // }),
      }}
    />
  );
};

export default Seo;
