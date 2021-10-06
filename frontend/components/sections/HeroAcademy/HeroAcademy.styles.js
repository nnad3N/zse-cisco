import styled from 'styled-components';

export const HeroAcademyWrapper = styled.section`
  padding: 10vh 0 10vh ${({ theme }) => theme.dimensions.padding};
  display: grid;
  row-gap: 4rem;
  column-gap: 8rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  ${({ theme }) => theme.mq.desktop} {
    padding: 10vh ${({ theme }) => theme.dimensions.padding};
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    justify-items: center;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: 5vh ${({ theme }) => theme.dimensions.paddingMobile};
  }
`;

export const HeaderWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;

  ${({ theme }) => theme.mq.desktop} {
    grid-column: 1/1;
  }
`;

export const DescriptionWrapper = styled.div`
  width: clamp(38rem, 100%, 60rem);
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.dimensions.heroAcademyPadding};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};

  p {
    margin-bottom: 4rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-row: 3/4;
    margin-right: 0;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.dimensions.cardPaddingMobile};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  background-color: darkGray;
  justify-self: end;
  align-self: center;

  ${({ theme }) => theme.mq.desktop} {
    width: clamp(38rem, 100%, 60rem);
    max-width: 100%;
    justify-self: center;
  }
`;
