import PropTypes from 'prop-types';
import NextImage from 'next/image';
import { getStrapiMedia } from 'utils/media';
import { NextImageWrapper, StyledNextImage } from './Image.styles';

const Image = ({ image }) => {
  if (image) {
    const { alternativeText, width, height } = image;

    const imageUrl = getStrapiMedia(image);

    return (
      <NextImageWrapper>
        <StyledNextImage layout="responsive" width={width} height={height} objectFit="contain" src={imageUrl} alt={alternativeText} />
      </NextImageWrapper>
    );
  } else {
    console.error('Image was required but not provided');
    // throw new Error('Image was required but not provided');
    return <NextImage src="/imgError.svg" height={300} width={300} />;
  }
};

Image.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alternativeText: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  priority: PropTypes.bool,
};

Image.defaultProps = {
  image: null,
};

export default Image;
