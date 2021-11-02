import React from 'react';
import PropTypes from 'prop-types';
import { PageTileWrapper } from './PageTile.styles';

const PageTile = ({ children, wide }) => {
  return <PageTileWrapper wide={wide}>{children}</PageTileWrapper>;
};

PageTile.propTypes = {};

export default PageTile;
