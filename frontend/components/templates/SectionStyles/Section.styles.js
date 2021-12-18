import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};

  ${({ theme }) => theme.mq.laptop} {
    flex-direction: column;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
    min-height: unset;

    h1 {
      font-size: ${({ theme }) => theme.fontSize.header};
    }
  }
`;

export const SectionDarkWrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};

  p {
    max-width: 60rem;
    margin-left: 5vw;

    ${({ theme }) => theme.mq.laptopLarge} {
      max-width: 50rem;
    }

    ${({ theme }) => theme.mq.laptop} {
      max-width: 60rem;
      margin: 5rem 0 0 0;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  margin: ${({ isReversed }) => (isReversed ? `0 0 0 5vw` : `0 5vw 0 0`)};

  p {
    margin-top: 3rem;

    ${({ theme }) => theme.mq.laptopLarge} {
      font-size: ${({ theme }) => theme.fontSize.bodySmall};
    }

    ${({ theme }) => theme.mq.laptop} {
      font-size: ${({ theme }) => theme.fontSize.body};
    }
  }

  ${({ theme }) => theme.mq.laptop} {
    margin: 0 0 3rem 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktopWide} {
  }
`;

export const ImageWrapper = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.laptop} {
    width: 60rem;
    order: 2;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }
`;
