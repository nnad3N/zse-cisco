import styled from 'styled-components';

export const HeroInstructorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.xV} 0;

  ${({ theme }) => theme.mq.heroInstructors} {
    &:first-child {
      justify-content: flex-start;
    }

    &:nth-child(2) {
      justify-content: flex-end;
    }
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: 0 0 ${({ theme }) => theme.padding.mV} 0;

    &:not(:last-child) {
      padding: ${({ theme }) => theme.padding.mV} 0;
    }
  }
`;

export const InstructorWrapper = styled.div`
  flex-basis: 32rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 3rem;

  h4 {
    margin-bottom: 1rem;
  }

  ${({ theme }) => theme.mq.heroInstructors} {
    padding: 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-basis: 40rem;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: 0 ${({ theme }) => theme.padding.s};
    flex-basis: unset;
  }
`;

export const ImageWrapper = styled.div`
  width: 20rem;
  border-radius: 50%;
  margin: 2rem 3rem;

  ${({ theme }) => theme.mq.heroInstructors} {
    margin: 0 6rem 0 0;
  }
`;
