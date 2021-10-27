import React from 'react';
import PropTypes from 'prop-types';
import { StyledMarkdown } from './RichText.styles';

const RichText = ({ children }) => {
  return <StyledMarkdown>{children}</StyledMarkdown>;
};

RichText.propTypes = {};

export default RichText;
