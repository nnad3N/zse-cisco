import styled from 'styled-components';

export const HeroPricingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh ${({ theme }) => theme.dimensions.paddingNarrow};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mq.desktop} {
    padding: 10vh ${({ theme }) => theme.dimensions.padding};
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 7vh ${({ theme }) => theme.dimensions.padding};
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: 5vh ${({ theme }) => theme.dimensions.paddingMobile};
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.mobileMedium} {
    margin-top: 4rem;
  }

  a {
    color: ${({ theme }) => theme.colors.accentColor};
    border-color: ${({ theme }) => theme.colors.accentColor};

    &:visited {
      color: ${({ theme }) => theme.colors.accentColor};
      border-color: ${({ theme }) => theme.colors.accentColor};
    }
  }

  & > div {
    font-size: ${({ theme }) => theme.fontSize.subText};
    margin: 0 10rem 0 0;
    width: 39rem;

    ${({ theme }) => theme.mq.tablet} {
      margin: 0 0 3rem 0;
    }

    ${({ theme }) => theme.mq.tablet} {
      margin: 0 0 3rem 0;
    }
  }
`;
