import styled from 'styled-components';

export const HeroInstructorWrapper = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  h4 {
    margin-bottom: 1rem;
  }

  ${({ theme }) => theme.mq.laptop} {
    &:not(:last-child) {
      padding: 0 0 ${({ theme }) => theme.padding.mV} 0;
    }
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
