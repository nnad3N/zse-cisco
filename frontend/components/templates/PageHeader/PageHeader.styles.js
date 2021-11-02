import styled from 'styled-components';

export const PageHeaderWrapper = styled.header`
  padding: ${({ theme }) => theme.padding.xlV} ${({ theme }) => theme.padding.m};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    max-width: 40rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: max-content;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      max-width: max-content;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 50rem;

    h1 {
      max-width: 30rem;
    }
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 80rem;
  max-width: 80rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    padding-top: ${({ theme }) => theme.padding.xV};
  }

  ${({ theme }) => theme.mq.tablet} {
    padding-top: ${({ theme }) => theme.padding.mV};
  }
`;
