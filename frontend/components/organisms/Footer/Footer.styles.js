import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.m};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.mq.laptopLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.subText};
    word-wrap: break-word;
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.padding.xsV};
  width: 100%;
  grid-template: 'content line images';
  justify-content: space-between;

  ${({ theme }) => theme.mq.desktop} {
    column-gap: 5rem;
  }

  ${({ theme }) => theme.mq.laptop} {
    max-width: ${({ theme }) => theme.dimensions.tileWidth};
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.laptop} {
    p {
      font-size: ${({ theme }) => theme.fontSize.subText};
    }
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    justify-content: space-between;
    width: 100%;
    text-align: center;
  }

  ${({ theme }) => theme.mq.desktopTall} {
    width: unset;
    max-width: unset;
  }
`;

export const ContentWrapper = styled.div`
  grid-area: content;
  display: grid;
  justify-content: space-between;
  min-width: 30vw;

  h3 {
    color: ${({ theme }) => theme.colors.accentColor};
    text-align: start;
    grid-row: 1/2;
    grid-column: 1/3;
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.mq.laptop} {
    width: unset;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h3 {
      text-align: center;
    }
  }
`;

export const StyledSchoolInfo = styled.p`
  width: 24rem;

  ${({ theme }) => theme.mq.mobileLarge} {
    text-align: center;
    width: 32rem;
    margin-bottom: 1rem;
  }
`;

export const InformationWrapper = styled.div`
  margin-left: 6rem;
  width: max-content;

  span {
    color: ${({ theme }) => theme.colors.accentColor};
    margin-right: 0.4rem;
    font-weight: 600;
  }

  ${({ theme }) => theme.mq.laptop} {
    margin-left: 0;
  }
`;

export const Line = styled.span`
  grid-area: line;
  justify-self: center;
  width: 0.6rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.accentColor};

  ${({ theme }) => theme.mq.laptop} {
    width: 100%;
    height: 0.5rem;
  }
`;

export const ImagesWrapper = styled.div`
  grid-area: images;
  min-width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: fit-content;

  ${({ theme }) => theme.mq.mobileLarge} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: clamp(9vw, 100%, 12rem);
  max-width: 30rem;

  &:first-child {
    margin-right: 5rem;
    width: clamp(14vw, 100%, 24rem);
  }

  ${({ theme }) => theme.mq.laptop} {
    width: 20rem;

    &:first-child {
      width: 25rem;
    }
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    min-width: 20rem;

    &:first-child {
      min-width: 30rem;
      margin: 0 0 3rem 0;
    }
  }
`;
