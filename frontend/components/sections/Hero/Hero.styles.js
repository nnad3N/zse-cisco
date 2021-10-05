import styled from 'styled-components';

export const HeroWrapper = styled.section`
  padding: 0 ${({ theme }) => theme.dimensions.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => `calc(40vw - ${theme.dimensions.padding})`};

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
`;
