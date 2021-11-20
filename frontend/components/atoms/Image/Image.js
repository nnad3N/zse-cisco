import PropTypes from 'prop-types';
import NextImage from 'next/image';
import { getStrapiMedia } from 'utils/media';
import { NextImageWrapper, StyledNextImage } from './Image.styles';

const Image = ({ image }) => {
  if (image) {
    const { alternativeText, width, height } = image;

    const loader = () => {
      return getStrapiMedia(image);
    };

    const imageUrl = getStrapiMedia(image);

    return (
      <NextImageWrapper>
        <StyledNextImage
          loader={loader}
          unoptimized
          layout="responsive"
          width={width}
          height={height}
          src={imageUrl ? imageUrl : '/imgError.svg'}
          alt={alternativeText || 'image'}
          priority
        />
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
  image: {
    url: '',
    alternativeText: 'Image failed to load properly',
    width: 0,
    height: 0,
  },
};

export default Image;
