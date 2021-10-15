import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 5vh ${({ theme }) => theme.dimensions.padding};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.mq.mobileMedium} {
    padding: 5vh ${({ theme }) => theme.dimensions.paddingMobile};
  }

  h3 {
    grid-area: header;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  p {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.subText};
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  column-gap: 5vw;
  row-gap: 4rem;
  width: 100%;
  grid-template:
    'header line images'
    'content line images';

  ${({ theme }) => theme.mq.desktop} {
    max-width: 65rem;
    grid-template:
      'header '
      'content'
      'line'
      'images';
  }

  ${({ theme }) => theme.mq.laptop} {
    p {
      font-size: ${({ theme }) => theme.fontSize.subText};
    }
  }

  ${({ theme }) => theme.mq.mobileMedium} {
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
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    justify-content: space-between;
  }
`;

export const InformationWrapper = styled.div`
  margin-left: 10rem;

  span {
    color: ${({ theme }) => theme.colors.accentColor};
    margin-right: 0.4rem;
    font-weight: 600;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: 0;
  }
`;

export const Line = styled.span`
  grid-area: line;
  justify-self: center;
  width: 0.6rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.accentColor};

  ${({ theme }) => theme.mq.desktop} {
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

  ${({ theme }) => theme.mq.desktop} {
    width: 25rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    min-width: 30rem;

    &:first-child {
      margin: 5rem 0;
    }
  }
`;
