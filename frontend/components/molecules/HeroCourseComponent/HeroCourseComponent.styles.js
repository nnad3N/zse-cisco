import styled from 'styled-components';

export const HeroCourseComponentWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.dimensions.tilePadding};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  max-width: 50rem;

  h4 {
    text-align: center;
    margin-bottom: 2rem;
  }

  a {
    margin-top: 4rem;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;
