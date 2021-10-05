import styled from 'styled-components';

export const HeroInstructorsWrapper = styled.section`
  padding: 5rem ${({ theme }) => theme.dimensions.padding};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(34rem, auto));
  column-gap: 5vw;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mainColor};

  ${({ theme }) => theme.mq.laptop} {
    column-gap: ${({ theme }) => theme.dimensions.padding};
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: 0 ${({ theme }) => theme.dimensions.paddingMobile};
  }
`;
