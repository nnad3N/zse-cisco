import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  padding: ${({ theme }) => theme.dimensions.tilePadding};
  width: clamp(${({ theme }) => theme.dimensions.tileWidth}, 100%, 80rem);

  h1 {
    font-size: ${({ theme }) => theme.fontSize.header};
  }

  p {
    margin-top: 2rem;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;
