import styled from 'styled-components';

export const HeroInstructorsWrapper = styled.section`
  padding: 5rem ${({ theme }) => theme.dimensions.padding};
  display: grid;
  grid-template-columns: auto auto;
  column-gap: ${({ theme }) => theme.dimensions.paddingNarrow};
  align-items: center;
  justify-content: space-between;
  min-height: 40vh;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;
