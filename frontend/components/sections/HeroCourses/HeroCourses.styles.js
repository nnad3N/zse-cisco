import styled from 'styled-components';

export const HeroCourseWrapper = styled.section`
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.x};

  ${({ theme }) => theme.mq.desktop} {
    padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(40rem, auto));
  column-gap: ${({ theme }) => theme.padding.x};
  row-gap: ${({ theme }) => `calc(${theme.padding.xV} + 2rem)`};
  margin-top: ${({ theme }) => `calc(${theme.padding.xV} + 2rem)`};

  ${({ theme }) => theme.mq.mobileLarge} {
    margin-top: ${({ theme }) => theme.padding.mV};
    row-gap: ${({ theme }) => theme.padding.mV};
  }
`;
