import styled from 'styled-components';

export const HeroPricingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.x};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mq.desktop} {
    padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.m};
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
  width: ${({ theme }) => theme.dimensions.tileWidth};

  ${({ theme }) => theme.mq.desktopTall} {
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    width: unset;
    margin-top: 4rem;
  }

  & > div {
    font-size: ${({ theme }) => theme.fontSize.subText};
    margin: 0 5rem 0 0;
    width: 39rem;

    ${({ theme }) => theme.mq.desktopTall} {
      margin: 0 0 4rem 0;
    }

    ${({ theme }) => theme.mq.tablet} {
      margin: 0 0 4rem 0;
    }

    ${({ theme }) => theme.mq.mobileLarge} {
      margin: 0 0 3rem 0;
      width: 100%;
    }
  }
`;
