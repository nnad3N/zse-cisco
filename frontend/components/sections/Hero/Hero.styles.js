import styled from 'styled-components';

export const HeroWrapper = styled.section`
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mq.laptop} {
    flex-direction: column;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
    min-height: unset;

    h1 {
      font-size: ${({ theme }) => theme.fontSize.header};
      text-align: center;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;

  h1 {
    max-width: 40rem;
    margin-bottom: 5rem;

    ${({ theme }) => theme.mq.laptop} {
      margin-bottom: 3rem;
    }
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktopWide} {
    margin-right: 10vmin;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 5rem;

  ${({ theme }) => theme.mq.laptop} {
    justify-content: center;
    margin-bottom: 5rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.laptop} {
    width: 50rem;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    width: 100%;
  }
`;
