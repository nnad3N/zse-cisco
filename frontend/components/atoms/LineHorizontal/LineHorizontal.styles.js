import styled from 'styled-components';

export const LineHorizontalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.span`
  min-height: ${({ large }) => (large ? '0.8rem' : '0.4rem')};
  background-color: ${({ theme }) => theme.colors.accentColor};
  margin-top: ${({ large }) => (large ? '2.2rem' : '1.5rem')};
`;
