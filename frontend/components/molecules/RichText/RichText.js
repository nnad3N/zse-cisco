import React from 'react';
import { StyledMarkdown } from './RichText.styles';
import { childrenShape } from 'propTypes/componentTypes';

const RichText = ({ children }) => {
  //eslint-disable-next-line
  return <StyledMarkdown children={children} skipHtml={true} />;
};

RichText.propTypes = {
  children: childrenShape,
};

export default RichText;
