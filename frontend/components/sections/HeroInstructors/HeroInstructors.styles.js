import styled from 'styled-components';

export const HeroInstructorsWrapper = styled.section`
  padding: 0 ${({ theme }) => theme.padding.m};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(34rem, 1fr));
  column-gap: ${({ theme }) => theme.padding.s};
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mainColor};

  ${({ theme }) => theme.mq.laptop} {
    column-gap: ${({ theme }) => theme.padding.m};
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: 0;
  }
`;
