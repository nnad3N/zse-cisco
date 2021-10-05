import styled from 'styled-components';

export const HeroAcademyWrapper = styled.section`
  padding: 10vh 0 10vh ${({ theme }) => theme.dimensions.paddingNarrow};
  display: grid;
  /* column-gap: ${({ theme }) => theme.dimensions.paddingNarrow}; */
  row-gap: 4rem;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;

  ${({ theme }) => theme.mq.desktop} {
    padding: 10vh 0 10vh ${({ theme }) => theme.dimensions.padding};
  }
`;

export const HeaderWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
`;

export const DescriptionWrapper = styled.div`
  width: 48rem;
  margin-right: ${({ theme }) => theme.dimensions.padding};
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
`;

export const ImageWrapper = styled.div`
  width: 66rem;
  height: 50vh;
  background-color: darkGray;
  justify-self: end;
`;
