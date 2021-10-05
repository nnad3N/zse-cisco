import { getStrapiMedia } from 'utils/media';
import { NextImageWrapper, StyledNextImage } from './Image.styles';

const Image = ({ image, priority }) => {
  const { url, alternativeText, width, height } = image;

  const loader = () => {
    return getStrapiMedia(image);
  };

  return (
    <NextImageWrapper>
      <StyledNextImage
        priority={priority}
        loader={loader}
        layout="responsive"
        width={width}
        height={height}
        src={url}
        alt={alternativeText || 'image'}
      />
    </NextImageWrapper>
  );
};

export default Image;
