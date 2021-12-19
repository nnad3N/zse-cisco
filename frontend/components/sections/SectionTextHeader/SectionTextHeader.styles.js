import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m} 0 ${({ theme }) => theme.padding.m};
  background-color: ${({ theme }) => theme.colors.backgroundWhite};

  ${({ theme }) => theme.mq.tablet} {
    width: unset;
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }
`;
export const HeaderWrapper = styled.div`
  width: 70rem;
  margin: 0 auto;

  ${({ theme }) => theme.mq.tablet} {
    width: unset;
  }
`;
