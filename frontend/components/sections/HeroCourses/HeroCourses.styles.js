import styled from 'styled-components';

export const HeroCourseWrapper = styled.section`
  padding: 10vh ${({ theme }) => theme.dimensions.paddingNarrow};

  ${({ theme }) => theme.mq.desktop} {
    padding: 10vh ${({ theme }) => theme.dimensions.padding};
  }
`;

export const HeaderWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(42rem, auto));
  column-gap: ${({ theme }) => theme.dimensions.paddingNarrow};
  row-gap: 15vh;
  margin-top: 10vh;
`;
