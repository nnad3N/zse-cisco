import React from 'react';
import { LineHorizontalWrapper, Line } from './LineHorizontal.styles';

const LineHorizontal = ({ children, large }) => {
  return (
    <LineHorizontalWrapper>
      {children}
      <Line large={large} />
    </LineHorizontalWrapper>
  );
};

export default LineHorizontal;
