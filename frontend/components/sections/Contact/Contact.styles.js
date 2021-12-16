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

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;

export const AddressWrapper = styled.div`
  margin-top: 5rem;

  h4 {
    font-size: ${({ theme }) => theme.fontSize.captionLargeMedium};
    font-weight: 400;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    margin-top: 4rem;
  }
`;

export const InformationWrapper = styled.div`
  margin: 2.5rem 0 5rem 0;

  p,
  span {
    text-align: start;
    font-size: ${({ theme }) => theme.fontSize.captionLargeMedium};
  }

  span {
    margin-right: 0.4rem;
    font-weight: 600;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 2rem 0 0 0;
  }
`;
