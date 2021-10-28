import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  position: absolute;
  min-height: 90vh;
  width: 100%;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.m};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, auto));
  row-gap: ${({ theme }) => theme.padding.xV};
  column-gap: ${({ theme }) => theme.padding.x};
  justify-content: center;
  align-content: start;

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: ${({ theme }) => theme.padding.xV} ${({ theme }) => theme.padding.s};
    grid-template-columns: 100%;
  }

  img {
    border-radius: 0;
  }
`;

export const ExitButton = styled.button`
  border: none;
  background-color: transparent;
  height: 5rem;
  width: 5rem;
  position: absolute;
  top: 5vh;
  right: 5vw;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-self: center;

  & > div {
    margin-bottom: 2rem;
    text-align: left;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.navList};
  }
`;
