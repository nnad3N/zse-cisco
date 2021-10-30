import React from 'react';
import { StyledPageWrapper } from './PageWrapper.styles';

const PageWrapper = ({ children, short, column }) => {
  return (
    <StyledPageWrapper short={short} column={column}>
      {children}
    </StyledPageWrapper>
  );
};

PageWrapper.propTypes = {};

export default PageWrapper;
