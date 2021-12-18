import styled from 'styled-components';

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.dimensions.tilePadding};
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  width: 70rem;
  color: ${({ theme }) => theme.colors.white};
  align-items: flex-start;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
    margin: 0 ${({ theme }) => theme.padding.s} ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
  }
`;

export const StyledList = styled.ul`
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fontSize.body};

  li {
    align-items: flex-start;
  }
`;

export const StyledItem = styled.span`
  inline-size: 40rem;
  overflow-wrap: break-word;

  ${({ theme }) => theme.mq.mobileLarge} {
    inline-size: 100%;
  }
`;
