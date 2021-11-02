import styled from 'styled-components';

export const PageTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.dimensions.richTextMarginTop};
  padding: ${({ theme }) => theme.dimensions.tilePadding};
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  width: ${({ wide }) => (wide ? 'max-content' : '40rem')};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;
