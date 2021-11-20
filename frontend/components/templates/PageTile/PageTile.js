import React from 'react';
import PropTypes from 'prop-types';
import { PageTileWrapper } from './PageTile.styles';
import { childrenShape } from 'propTypes/componentTypes';

const PageTile = ({ children, ...props }) => {
  return <PageTileWrapper {...props}>{children}</PageTileWrapper>;
};

PageTile.propTypes = {
  children: childrenShape,
  props: PropTypes.bool,
};

export default PageTile;
