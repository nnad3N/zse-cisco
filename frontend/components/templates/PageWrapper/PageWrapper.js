import React from 'react';
import { StyledPageWrapper } from './PageWrapper.styles';

const PageWrapper = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

PageWrapper.propTypes = {};

export default PageWrapper;
