import styled from 'styled-components';

export const StyledPageWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  min-height: ${({ short }) => (short ? 'unset' : '90vh')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
    min-height: unset;
  }
`;
