import React from 'react';
import styled from 'styled-components';

const LineHorizontalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.span`
  min-height: ${({ large }) => (large ? '0.8rem' : '0.4rem')};
  background-color: ${({ theme }) => theme.colors.accentColor};
  margin-top: ${({ large }) => (large ? '2.2rem' : '1.5rem')};
`;

const LineHorizontal = ({ children, large }) => {
  return (
    <LineHorizontalWrapper>
      {children}
      <Line large={large} />
    </LineHorizontalWrapper>
  );
};

export default LineHorizontal;
