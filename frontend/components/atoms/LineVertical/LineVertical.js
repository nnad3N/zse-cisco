import React from 'react';
import PropTypes from 'prop-types';
import { componentShape } from 'utils/shapes';
import { LineVerticalWrapper, Line } from './LineVertical.styles';

const LineVertical = ({ children, large }) => {
  return (
    <LineVerticalWrapper>
      <Line large={large} />
      {children}
    </LineVerticalWrapper>
  );
};

LineVertical.propTypes = {
  children: componentShape,
  large: PropTypes.bool,
};

export default LineVertical;
