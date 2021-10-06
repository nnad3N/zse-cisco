import React from 'react';
import PropTypes from 'prop-types';
import { componentShape } from 'utils/shapes';

import { LineHorizontalWrapper, Line } from './LineHorizontal.styles';

const LineHorizontal = ({ children, large }) => {
  return (
    <LineHorizontalWrapper>
      {children}
      <Line large={large} />
    </LineHorizontalWrapper>
  );
};

LineHorizontal.propTypes = {
  children: componentShape,
  large: PropTypes.bool,
};

export default LineHorizontal;
