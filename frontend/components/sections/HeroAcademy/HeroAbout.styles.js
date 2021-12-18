import styled from 'styled-components';

export const HeroAboutWrapper = styled.section`
  padding: ${({ theme }) => theme.padding.xV} 0 ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  display: grid;
  row-gap: ${({ theme }) => theme.padding.xV};
  column-gap: ${({ theme }) => theme.padding.xV};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  ${({ theme }) => theme.mq.desktop} {
    padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.s};
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    justify-items: center;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.s};
    row-gap: ${({ theme }) => theme.padding.mV};
  }
`;

export const HeaderWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;

  ${({ theme }) => theme.mq.desktop} {
    grid-column: 1/1;
  }
`;

export const DescriptionWrapper = styled.div`
  width: clamp(38rem, 100%, 60rem);
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.dimensions.tilePadding};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};

  p {
    margin-bottom: 5rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: clamp(38rem, 100%, ${({ theme }) => theme.dimensions.tileWidth});
    grid-row: 3/4;
    margin-right: 0;
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.dimensions.tilePaddingMobile};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  justify-self: end;
  align-self: center;

  ${({ theme }) => theme.mq.desktop} {
    width: clamp(38rem, 100%, ${({ theme }) => theme.dimensions.tileWidth});
    max-width: 100%;
    justify-self: center;
  }
`;
