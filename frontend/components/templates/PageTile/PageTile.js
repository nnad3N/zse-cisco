import React from 'react';
import PropTypes from 'prop-types';
import { PageTileWrapper } from './PageTile.styles';
import { childrenShape } from 'propTypes/componentTypes';

const PageTile = ({ children }) => {
  return <PageTileWrapper>{children}</PageTileWrapper>;
};

PageTile.propTypes = {
  children: childrenShape,
  props: PropTypes.bool,
};

export default PageTile;
