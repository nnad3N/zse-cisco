import styled from 'styled-components';

export const HeroInstructorWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: column;
    max-width: 38rem;
  }
`;

export const InstructorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  h4 {
    margin-bottom: 1rem;
  }

  &:nth-child(1) {
    margin-right: 2rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  background-color: darkGray;
  min-width: 17rem;
  min-height: 17rem;
  margin-right: 4rem;
  border-radius: 50%;
`;
