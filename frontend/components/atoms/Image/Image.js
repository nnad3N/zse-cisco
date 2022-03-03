import { useContext } from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';
import { AppContext } from 'providers/AppProvider';
import { NextImageWrapper, StyledNextImage } from './Image.styles';
import { getStrapiURL } from 'utils/api';

const Image = ({ image }) => {
  const { currentDarkMode } = useContext(AppContext);

  if (image) {
    const { alternativeText, url, width, height } = image;
    const src = getStrapiURL(url);

    return (
      <NextImageWrapper dark={currentDarkMode}>
        <StyledNextImage
          layout="responsive"
          width={width || 10}
          height={height || 10}
          objectFit="contain"
          src={src}
          alt={alternativeText}
          priority
          unoptimized
        />
      </NextImageWrapper>
    );
  } else {
    console.error('Image was required but was not provided');
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
