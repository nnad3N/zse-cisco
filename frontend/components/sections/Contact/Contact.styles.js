import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  padding: ${({ theme }) => theme.dimensions.tilePadding};
  width: clamp(65rem, 100%, 38vw);

  ${({ theme }) => theme.mq.mobileMedium} {
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;

export const ContactWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10vh ${({ theme }) => theme.dimensions.padding};

  ${({ theme }) => theme.mq.mobileMedium} {
    padding: 8vh ${({ theme }) => theme.dimensions.paddingMobile};
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
