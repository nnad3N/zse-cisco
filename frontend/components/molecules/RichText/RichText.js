import React from 'react';
import PropTypes from 'prop-types';
import { StyledMarkdown } from './RichText.styles';

const RichText = ({ children }) => {
  return <StyledMarkdown>{children}</StyledMarkdown>;
};

RichText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.elementType), PropTypes.elementType]),
};

export default RichText;
