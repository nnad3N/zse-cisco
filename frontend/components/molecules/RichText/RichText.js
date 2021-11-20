import React from 'react';
import PropTypes from 'prop-types';
import { StyledMarkdown } from './RichText.styles';
import { childrenShape } from 'propTypes/componentTypes';

const RichText = ({ children }) => {
  return <StyledMarkdown>{children}</StyledMarkdown>;
};

RichText.propTypes = {
  children: childrenShape,
};

export default RichText;
