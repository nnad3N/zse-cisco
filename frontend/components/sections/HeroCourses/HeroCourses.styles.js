import styled from 'styled-components';

export const HeroCourseWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  column-gap: ${({ theme }) => theme.dimensions.paddingNarrow};
  row-gap: 15vh;
  justify-items: center;
  padding: 10vh ${({ theme }) => theme.dimensions.paddingNarrow};

  ${({ theme }) => theme.mq.desktop} {
    padding: 10vh ${({ theme }) => theme.dimensions.padding};
  }
`;

export const HeaderWrapper = styled.div`
  text-align: center;
  width: 100%;
  grid-row: 1/2;
  grid-column: 1/3;
`;
