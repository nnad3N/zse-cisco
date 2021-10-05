import styled from 'styled-components';

export const HeroPricingWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `6rem ${theme.dimensions.paddingNarrow}`};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};

  h1 {
    margin-right: 10rem;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.accentColor};
    border-color: ${({ theme }) => theme.colors.accentColor};

    &:visited {
      color: ${({ theme }) => theme.colors.accentColor};
      border-color: ${({ theme }) => theme.colors.accentColor};
    }
  }

  & > div {
    margin: 0 auto;
  }
`;
