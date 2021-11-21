import React from 'react';
import PropTypes from 'prop-types';
import { childrenShape } from 'propTypes/componentTypes';
import { StyledPageWrapper } from './PageWrapper.styles';

const PageWrapper = ({ children, ...props }) => {
  return <StyledPageWrapper {...props}>{children}</StyledPageWrapper>;
};

PageWrapper.propTypes = {
  children: childrenShape,
  props: PropTypes.bool,
};

export default PageWrapper;
