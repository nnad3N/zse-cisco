import styled from 'styled-components';

export const StyledPageWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  min-height: ${({ short }) => (short ? 'unset' : '90vh')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  background-color: ${({ theme, white }) => (white ? theme.colors.backgroundWhite : 'transparent')};

  ${({ isLast }) => (isLast ? `&:last-of-type` : '&:first-of-type')} {
    padding: ${({ theme, modular, isLast }) =>
      isLast
        ? ` 0  ${theme.padding.m} ${theme.padding.xV}  ${theme.padding.m}`
        : modular
        ? `${theme.padding.xV} ${theme.padding.m} 0 ${theme.padding.m}`
        : `${theme.padding.xV} ${theme.padding.m}`};
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 0;
    min-height: unset;
    margin-bottom: ${({ theme, modular, white }) => (white ? 0 : modular ? theme.padding.sV : 0)};

    &:last-of-type,
    &:first-of-type {
      padding: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    margin-bottom: ${({ theme, modular, white }) => (white ? 0 : modular ? theme.padding.ssV : 0)};
  }
`;
