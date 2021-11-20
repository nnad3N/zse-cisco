import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.headerMobile};
`;

export const InfoSection = styled.section`
  padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.m};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColor};

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  ${({ theme }) => theme.mq.laptopLarge} {
    width: max-content;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfoComponent = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  &:not(:last-child) {
    margin-right: 8rem;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.captionLargeMedium};
  }

  ${({ theme }) => theme.mq.laptopLarge} {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4rem;
    }
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
  font-weight: 600;
  margin-right: 0.6rem;
`;

export const ImageWrapper = styled.div`
  width: 7rem;
  margin-right: 3rem;
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

  ${({ theme }) => theme.mq.laptopLarge} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTileHeader = styled.h4`
  ${({ theme }) => theme.mobileLarge} {
    max-width: 75%;
  }
`;
