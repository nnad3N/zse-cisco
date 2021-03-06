import styled from 'styled-components';

export const SectionHeaderWrapper = styled.header`
  padding: ${({ theme }) => theme.padding.xlV} ${({ theme }) => theme.padding.m};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 0;
  }

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
    max-width: ${({ isLong }) => (isLong ? `max-content` : `40rem`)};
    margin-right: 2rem;
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
    width: ${({ isLong }) => (isLong ? `100%` : `50rem`)};

    h1 {
      max-width: max-content;
    }
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: ${({ isLong }) => (isLong ? `40rem` : `80rem`)};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.desktop} {
    padding-top: ${({ theme }) => theme.padding.xV};
    margin: ${({ isLong }) => (isLong ? '0 auto' : 0)};
    width: ${({ isLong }) => (isLong ? `40rem` : `50rem`)};
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    padding-top: ${({ theme }) => theme.padding.mV};
  }
`;
