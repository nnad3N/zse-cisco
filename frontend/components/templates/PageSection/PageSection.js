import React from 'react';
import PropTypes from 'prop-types';
import { childrenShape } from 'propTypes/componentTypes';
import { PageSectionWrapper } from './PageSection.style';

const PageSection = ({ children, ...props }) => {
  return <PageSectionWrapper {...props}>{children}</PageSectionWrapper>;
};

PageSection.propTypes = {
  children: childrenShape,
  props: PropTypes.bool,
};

export default PageSection;
