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

  ${({ theme }) => theme.mq.mobileLarge} {
    margin: 0 0 10rem 0;

    &:not(:last-child) {
      margin: 10rem 0 10rem 0;
    }
  }

  ${({ theme }) => theme.mq.mobileSSmall} {
    margin: 0 0 8rem 0;

    &:not(:last-child) {
      margin: 8rem 0 8rem 0;
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

  ${({ theme }) => theme.mq.mobileLarge} {
    flex-basis: 40rem;
  }

  ${({ theme }) => theme.mq.mobileSmall} {
    flex-basis: unset;
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
