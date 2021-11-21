import styled from 'styled-components';

export const StyledPageWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  min-height: ${({ short }) => (short ? 'unset' : '90vh')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};

  ${({ theme }) => theme.mq.desktop} {
    padding: ${({ theme }) => theme.padding.xV} ${({ theme, wide }) => (wide ? theme.padding.xs : theme.padding.m)};
  }

  ${({ theme, wide }) => (wide ? theme.mq.laptopLarge : theme.mq.tablet)} {
    padding: 0;
    min-height: unset;
  }
`;
