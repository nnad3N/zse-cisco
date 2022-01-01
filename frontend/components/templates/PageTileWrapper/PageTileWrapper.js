import React from 'react';
import { childrenShape } from 'propTypes/componentTypes';
import { StyledPageTileWrapper } from './PageTileWrapper.styles';

const PageTileWrapper = ({ children }) => {
  return <StyledPageTileWrapper>{children}</StyledPageTileWrapper>;
};

PageTileWrapper.propTypes = {
  children: childrenShape,
};

export default PageTileWrapper;
