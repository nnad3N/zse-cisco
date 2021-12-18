import styled from 'styled-components';

export const StyledPageWrapper = styled.div`
  padding: ${({ theme, modular }) => (modular ? 0 : theme.padding.xV)} ${({ theme }) => theme.padding.m} ${({ theme }) => theme.padding.xV}
    ${({ theme }) => theme.padding.m};
  min-height: ${({ short }) => (short ? 'unset' : '90vh')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  background-color: ${({ theme, white }) => (white ? theme.colors.backgroundWhite : 'transparent')};

  ${({ theme }) => theme.mq.desktop} {
    padding: ${({ theme, modular }) => (modular ? 0 : theme.padding.xV)} ${({ theme }) => theme.padding.m} ${({ theme }) => theme.padding.xV}
      ${({ theme }) => theme.padding.m};
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 0;
    min-height: unset;
  }
`;
