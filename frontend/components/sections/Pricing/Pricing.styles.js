import styled from 'styled-components';

export const PricingWrapper = styled.div`
  min-height: 65vh;
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
    min-height: unset;
  }
`;

export const PricingComponentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ theme }) => theme.mq.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;
