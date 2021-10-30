import PropTypes from 'prop-types';
import { getStrapiMedia } from 'utils/media';
import { NextImageWrapper, StyledNextImage } from './Image.styles';

const Image = ({ image, priority }) => {
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
          src={imageUrl}
          alt={alternativeText || 'image'}
          priority={priority}
        />
      </NextImageWrapper>
    );
  } else {
    console.error('Image was required but not provided');
    return <h5>Image was required but not provided</h5>;
  }
};

Image.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alternativeText: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  priority: PropTypes.bool,
};

Image.defaultProps = {
  image: {
    url: 'https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    alternativeText: 'image failed to load properly',
    width: 1260,
    height: 750,
  },
};

export default Image;
