import { useContext } from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';
import { AppContext } from 'providers/AppProvider';
import { NextImageWrapper, StyledNextImage } from './Image.styles';

const Image = ({ image }) => {
  const { currentDarkMode } = useContext(AppContext);

  if (image) {
    const { alternativeText, url, width, height } = image;

    const loader = ({ src, width }) => {
      if (src == null) {
        return null;
      }
      return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${src}?w=${width}`;
    };

    return (
      <NextImageWrapper dark={currentDarkMode}>
        <StyledNextImage
          loader={loader}
          layout="responsive"
          width={width}
          height={height}
          objectFit="contain"
          src={url}
          alt={alternativeText}
          priority
        />
      </NextImageWrapper>
    );
  } else {
    console.error('Image was required but not provided');
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
};

Image.defaultProps = {
  image: null,
};

export default Image;
