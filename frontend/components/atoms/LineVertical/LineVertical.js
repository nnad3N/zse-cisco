import React from 'react';
import PropTypes from 'prop-types';
import { childrenShape } from 'types/componentTypes';
import { LineVerticalWrapper, Line } from './LineVertical.styles';

const LineVertical = ({ children, large }) => {
  return (
    <LineVerticalWrapper data-testid="line-vertical-wrapper">
      <Line large={large} data-testid="line-vertical" />
      {children}
    </LineVerticalWrapper>
  );
};

LineVertical.propTypes = {
  children: childrenShape,
  large: PropTypes.bool,
};

export default LineVertical;
