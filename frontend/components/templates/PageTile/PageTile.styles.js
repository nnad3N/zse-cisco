import styled from 'styled-components';

export const PageTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.dimensions.richTextMarginTop};
  padding: ${({ theme }) => theme.dimensions.tilePadding};
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  width: 40rem;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mq.mobileLarge} {
    width: 100%;
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;
