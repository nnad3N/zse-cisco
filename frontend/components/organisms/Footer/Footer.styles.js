import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.m};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }

  p {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.subText};
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  column-gap: ${({ theme }) => theme.padding.xs};
  row-gap: ${({ theme }) => theme.padding.xsV};
  width: 100%;
  grid-template: 'content line images';
  justify-content: space-between;

  ${({ theme }) => theme.mq.laptop} {
    row-gap: ${({ theme }) => theme.padding.xsV};
    max-width: ${({ theme }) => theme.dimensions.tileWidth};
    justify-content: stretch;
    grid-template:
      'content'
      'line'
      'images';
  }

  ${({ theme }) => theme.mq.laptop} {
    p {
      font-size: ${({ theme }) => theme.fontSize.subText};
    }
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    max-width: 100%;
    text-align: center;
  }

  ${({ theme }) => theme.mq.desktopTall} {
    width: unset;
    max-width: unset;
  }
`;

export const StyledSchoolInfo = styled.p`
  max-width: 14rem;
  margin-right: 3rem;
`;

export const ContentWrapper = styled.div`
  grid-area: content;
  display: grid;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.accentColor};
    text-align: start;
    grid-row: 1/2;
    grid-column: 1/3;
    margin-bottom: 1rem;
  }

  ${({ theme }) => theme.mq.laptop} {
    justify-content: space-between;
  }
`;

export const InformationWrapper = styled.div`
  margin-left: 8rem;
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 12vw;
  max-width: 30rem;

  &:first-child {
    margin-right: 5rem;
  }

  ${({ theme }) => theme.mq.laptop} {
    width: 25rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    min-width: 30rem;

    &:first-child {
      margin: 0 0 3rem 0;
    }
  }
`;
