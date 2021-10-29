import React from 'react';
import { childrenShape } from 'propTypes/componentTypes';
import { PageSectionWrapper } from './PageSection.style';

const PageSection = ({ children }) => {
  return <PageSectionWrapper>{children}</PageSectionWrapper>;
};

PageSection.propTypes = {
  children: childrenShape,
};

export default PageSection;
