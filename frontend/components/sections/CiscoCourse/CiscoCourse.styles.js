import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.headerMobile};
`;

export const InfoSection = styled.section`
  padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.m};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColor};

  ${({ theme }) => theme.mq.laptop} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimensions.pageSectionWidth};

  ${({ theme }) => theme.mq.tablet} {
    width: max-content;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfoComponent = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};

  &:not(:last-child) {
    margin-right: 6rem;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.captionLargeMedium};
  }

  ${({ theme }) => theme.mq.laptop} {
    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
  font-weight: 600;
  margin-right: 0.6rem;
`;

export const StyledList = styled.ul`
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fontSize.body};
`;

export const StyledItem = styled.span`
  inline-size: 40rem;
  overflow-wrap: break-word;

  ${({ theme }) => theme.mq.mobileLarge} {
    inline-size: 100%;
  }
`;

export const PageTileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ theme }) => theme.mq.laptop} {
    flex-direction: column;
    align-items: center;

    div {
      width: ${({ theme }) => theme.dimensions.tileWidth};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    div {
      width: 100%;
    }
  }
`;

export const StyledTileHeader = styled.h4`
  ${({ theme }) => theme.mobileLarge} {
    max-width: 67%;
  }

  ${({ theme }) => theme.mq.mobileSmall} {
    max-width: 60%;
  }
`;
