import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  position: absolute;
  min-height: 90vh;
  width: 100%;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, auto));
  row-gap: ${({ theme }) => theme.padding.xV};
  column-gap: ${({ theme }) => theme.padding.x};
  align-content: flex-start;

  ${({ theme }) => theme.mq.laptop} {
    column-gap: ${({ theme }) => theme.padding.s};
    padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.s};
  }

  ${({ theme }) => theme.mq.tabletLarge} {
    grid-template-columns: 100%;
    padding: ${({ theme }) => theme.padding.mV} ${({ theme }) => theme.padding.m};
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.sV} ${({ theme }) => theme.padding.s};
  }

  img {
    border-radius: 0;
  }

  li {
    transition: transform 0.1s ease-out;

    &:hover {
      transform: translate(1%, -7%);
    }
  }
`;

export const ContentWrapper = styled.div`
  justify-self: center;
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
    margin-bottom: 2rem;
    text-align: left;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.navList};
  }
`;
