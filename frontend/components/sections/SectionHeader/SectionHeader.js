import React from 'react';
import PropTypes from 'prop-types';
import LineVertical from '@atoms/LineVertical/LineVertical';
import Image from '@atoms/Image/Image';
import { SectionHeaderWrapper, ContentWrapper, ImageWrapper } from './SectionHeader.styles';

const SectionHeader = ({ data: { header, image, isLong } }) => {
  return (
    <SectionHeaderWrapper>
      <ContentWrapper isLong={isLong}>
        <LineVertical large>
          <h1>{header}</h1>
        </LineVertical>
        <ImageWrapper isLong={isLong}>
          <Image image={image.data.attributes} />
        </ImageWrapper>
      </ContentWrapper>
    </SectionHeaderWrapper>
  );
};

SectionHeader.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    image: PropTypes.object,
    isLong: PropTypes.bool,
  }).isRequired,
};

SectionHeader.defaultProps = {
  data: {
    header: '',
  },
};

export default SectionHeader;
