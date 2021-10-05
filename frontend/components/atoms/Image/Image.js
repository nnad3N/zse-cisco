import { getStrapiMedia } from 'utils/media';
import { NextImageWrapper, StyledNextImage } from './Image.styles';

const Image = ({ image, hasRadius, priority }) => {
  const { url, alternativeText, width, height } = image;

  const loader = () => {
    return getStrapiMedia(image);
  };

  return (
    <NextImageWrapper hasRadius={hasRadius}>
      <StyledNextImage
        priority={priority}
        radius={hasRadius}
        loader={loader}
        layout="responsive"
        width={width}
        height={height}
        src={url}
        alt={alternativeText || ''}
      />
    </NextImageWrapper>
  );
};

export default Image;
