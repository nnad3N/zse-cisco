import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 8vh ${({ theme }) => theme.dimensions.padding};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.mq.mobileMedium} {
    padding: 5vh ${({ theme }) => theme.dimensions.paddingMobile};
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  column-gap: ${({ theme }) => theme.dimensions.padding};
  row-gap: 4rem;

  grid-template:
    'header line images'
    'content line images';

  ${({ theme }) => theme.mq.desktop} {
    min-width: 40rem;
    max-width: 50rem;
    grid-template:
      'header '
      'content'
      'line'
      'images';
  }

  ${({ theme }) => theme.mq.mobileMedium} {
    max-width: 100%;
    text-align: center;
  }

  h1 {
    grid-area: header;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.subHeader};
  }
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

  ${({ theme }) => theme.mq.desktop} {
    margin-left: 0;
  }

  span {
    color: ${({ theme }) => theme.colors.accentColor};
    margin-right: 0.4rem;
    font-weight: 600;
  }
`;

export const Line = styled.span`
  grid-area: line;
  min-width: 0.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.accentColor};

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    min-height: 0.5rem;
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
  height: 10rem;
  width: 20rem;
  background-color: darkGray;

  &:first-child {
    margin-right: 10rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    &:first-child {
      margin-right: 0;
      margin-bottom: 10rem;
    }
  }
`;
