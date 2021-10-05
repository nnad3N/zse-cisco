import styled from 'styled-components';

export const HeroInstructorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;

  ${({ theme }) => theme.mq.heroInstructors} {
    &:first-child {
      justify-content: flex-start;
    }

    &:nth-child(2) {
      justify-content: flex-end;
    }
  }
`;

export const InstructorWrapper = styled.div`
  flex-basis: 32rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  h4 {
    margin-bottom: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  background-color: darkGray;
  min-width: 17rem;
  min-height: 17rem;
  border-radius: 50%;
  margin: 2rem 4rem;

  ${({ theme }) => theme.mq.heroInstructors} {
    margin: 0 4rem 0 0;
  }
`;
