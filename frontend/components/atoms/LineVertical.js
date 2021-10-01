import React from 'react';
import styled from 'styled-components';

const LineVerticalWrapper = styled.div`
  display: flex;
`;

const Line = styled.span`
  min-width: ${({ large }) => (large ? '0.8rem' : '0.4rem')};
  background-color: ${({ theme }) => theme.colors.accentColor};
  margin-right: ${({ large }) => (large ? '2.2rem' : '1.5rem')};
`;

const LineVertical = ({ children, large }) => {
  return (
    <LineVerticalWrapper>
      <Line large={large} />
      {children}
    </LineVerticalWrapper>
  );
};

export default LineVertical;
