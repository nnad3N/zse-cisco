import styled from 'styled-components';

export const HeroInstructorsWrapper = styled.section`
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.x};
  background-color: ${({ theme }) => theme.colors.mainColor};
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mq.laptopLarge} {
    padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.s};
  }

  ${({ theme }) => theme.mq.laptop} {
    flex-direction: column;
    align-items: center;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }
`;
