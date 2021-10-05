import styled from 'styled-components';

export const HeroWrapper = styled.section`
  padding: 5vh ${({ theme }) => theme.dimensions.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;

  ${({ theme }) => theme.mq.hero} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  margin-bottom: 5vh;
  width: 44rem;
  display: flex;
  flex-direction: column;

  h1 {
    max-width: 40rem;
    margin-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 4rem;
`;

export const ImageWrapper = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.hero} {
    width: 44rem;
  }
`;
