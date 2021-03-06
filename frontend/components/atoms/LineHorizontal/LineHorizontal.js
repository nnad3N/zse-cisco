import React from 'react';
import PropTypes from 'prop-types';
import { childrenShape } from 'propTypes/componentTypes';
import { LineHorizontalWrapper, Line } from './LineHorizontal.styles';

const LineHorizontal = ({ children, large }) => {
  return (
    <LineHorizontalWrapper data-testid="line-horizontal-wrapper">
      {children}
      <Line large={large} data-testid="line-horizontal" />
    </LineHorizontalWrapper>
  );
};

LineHorizontal.propTypes = {
  children: childrenShape,
  large: PropTypes.bool,
};

export default LineHorizontal;
