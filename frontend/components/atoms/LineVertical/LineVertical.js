import React from 'react';
import { LineVerticalWrapper, Line } from './LineVertical.styles';

const LineVertical = ({ children, large }) => {
  return (
    <LineVerticalWrapper>
      <Line large={large} />
      {children}
    </LineVerticalWrapper>
  );
};

export default LineVertical;
