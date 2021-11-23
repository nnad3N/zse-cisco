import styled from 'styled-components';

export const HeroInstructorWrapper = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  h4 {
    margin-bottom: 1rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 40rem;
  }

  ${({ theme }) => theme.mq.laptop} {
    max-width: 50rem;

    &:not(:last-child) {
      padding: 0 0 ${({ theme }) => theme.padding.mV} 0;
    }
  }
`;
