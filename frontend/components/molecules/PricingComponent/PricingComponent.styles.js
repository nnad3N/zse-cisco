import styled from 'styled-components';

export const PricingComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.dimensions.richTextMarginTop};
  padding: ${({ theme }) => theme.dimensions.tilePadding};
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  width: 40rem;
  color: ${({ theme }) => theme.colors.white};

  span {
    font-size: ${({ theme }) => theme.fontSize.body};
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    width: 100%;
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 2rem;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.3rem solid ${({ theme }) => theme.colors.darkBlue};
`;

export const Head = styled(Row)`
  margin-top: 2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.accentColor};

  span {
    font-size: ${({ theme }) => theme.fontSize.captionMedium};
  }
`;

export const Annotation = styled.p`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.captionSmall};
  font-weight: 300;
  margin-top: 1rem;

  &:first-child {
    margin-top: 2rem;
  }
`;
