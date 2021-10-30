import React from 'react';
import PropTypes from 'prop-types';
import Image from '@atoms/Image/Image';
import { PageHeaderWrapper, ContentWrapper, ImageWrapper } from './PageHeader.styles';

const PageHeader = ({ children, image }) => {
  return (
    <PageHeaderWrapper>
      <ContentWrapper>
        {children}
        <ImageWrapper>
          <Image image={image} />
        </ImageWrapper>
      </ContentWrapper>
    </PageHeaderWrapper>
  );
};

PageHeader.propTypes = {};

export default PageHeader;
