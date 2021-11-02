import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.headerMobile};
`;

export const StyledSpan = styled.span`
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.bodySmall};
`;
