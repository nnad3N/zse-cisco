import React from 'react';
import PropTypes from 'prop-types';
import { PageTileWrapper } from './PageTile.styles';

const PageTile = ({ children }) => {
  return <PageTileWrapper>{children}</PageTileWrapper>;
};

PageTile.propTypes = {};

export default PageTile;
