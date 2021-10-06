import styled from 'styled-components';

export const HeroCourseWrapper = styled.section`
  padding: 10vh ${({ theme }) => theme.dimensions.paddingNarrow};

  ${({ theme }) => theme.mq.desktop} {
    padding: 10vh ${({ theme }) => theme.dimensions.padding};
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: 5vh ${({ theme }) => theme.dimensions.paddingMobile};
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(40rem, auto));
  column-gap: ${({ theme }) => theme.dimensions.paddingNarrow};
  row-gap: 15vh;
  margin-top: 10vh;

  ${({ theme }) => theme.mq.mobileLarge} {
    margin-top: 8vh;
    row-gap: 8vh;
  }
`;
