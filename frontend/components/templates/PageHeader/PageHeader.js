import React from 'react';
import PropTypes from 'prop-types';
import { childrenShape } from 'propTypes/componentTypes';
import Image from '@atoms/Image/Image';
import { PageHeaderWrapper, ContentWrapper, ImageWrapper } from './PageHeader.styles';

const PageHeader = ({ children, image, longText }) => {
  return (
    <PageHeaderWrapper>
      <ContentWrapper longText={longText}>
        {children}
        <ImageWrapper longText={longText}>
          <Image image={image} priority />
        </ImageWrapper>
      </ContentWrapper>
    </PageHeaderWrapper>
  );
};

PageHeader.propTypes = {
  children: childrenShape,
  image: PropTypes.object,
  longText: PropTypes.bool,
};

export default PageHeader;
