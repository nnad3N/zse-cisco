import React from 'react';
import { childrenShape } from 'propTypes/componentTypes';
import { PageSectionWrapper } from './PageSection.style';

const PageSection = ({ children, wide }) => {
  return <PageSectionWrapper wide={wide}>{children}</PageSectionWrapper>;
};

PageSection.propTypes = {
  // children: childrenShape,
};

export default PageSection;
