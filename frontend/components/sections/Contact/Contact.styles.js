import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  padding: ${({ theme }) => theme.dimensions.tilePadding};
  width: clamp(${({ theme }) => theme.dimensions.tileWidth}, 100%, 80rem);

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;

export const AddressWrapper = styled.div`
  margin-top: 6rem;

  h4,
  h5 {
    font-weight: 400;
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.subText};
    margin-top: 0.5rem;
  }
`;

export const InformationWrapper = styled.div`
  margin: 4rem 0 6rem 0;

  p,
  span {
    font-size: ${({ theme }) => theme.fontSize.captionLarge};
  }

  span {
    margin-right: 0.4rem;
    font-weight: 600;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 4rem 0 0 0;
  }
`;
