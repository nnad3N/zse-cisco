import React from 'react';
import PropTypes from 'prop-types';
import { StyledPageTileWrapper } from './PageTileWrapper.styles';

const PageTileWrapper = ({ children }) => {
  return <StyledPageTileWrapper>{children}</StyledPageTileWrapper>;
};

PageTileWrapper.propTypes = {};

export default PageTileWrapper;
