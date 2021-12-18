import React from 'react';
import PropTypes from 'prop-types';
import LineVertical from '@atoms/LineVertical/LineVertical';
import Image from '@atoms/Image/Image';
import { SectionWrapper, ContentWrapper, ImageWrapper } from '@templates/SectionStyles/Section.styles';

const SectionWithImage = ({ data: { header, description, image, isReversed } }) => {
  return (
    <SectionWrapper>
      {isReversed ? (
        <>
          <ImageWrapper>
            <Image image={image.data.attributes} />
          </ImageWrapper>
          <ContentWrapper isReversed={isReversed}>
            <LineVertical large>
              <h1>{header}</h1>
            </LineVertical>
            <p>{description}</p>
          </ContentWrapper>
        </>
      ) : (
        <>
          <ContentWrapper>
            <LineVertical large>
              <h1>{header}</h1>
            </LineVertical>
            <p>{description}</p>
          </ContentWrapper>
          <ImageWrapper>
            <Image image={image.data.attributes} />
          </ImageWrapper>
        </>
      )}
    </SectionWrapper>
  );
};

SectionWithImage.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    description: PropTypes.string,
    isReversed: PropTypes.bool,
  }),
};

SectionWithImage.defaultProps = {
  data: {
    header: '',
    description: '',
  },
};

export default SectionWithImage;
