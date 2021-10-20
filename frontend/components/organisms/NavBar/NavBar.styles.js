import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  padding: 1rem ${({ theme }) => theme.dimensions.padding};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
  z-index: 30;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};
  position: relative;

  img {
    border-radius: 0;
  }

  ${({ theme }) => theme.mq.mobileMedium} {
    padding: 2rem ${({ theme }) => theme.dimensions.paddingMobile};
  }
`;

export const Logo = styled.div`
  width: 22rem;
`;

export const MenuButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  width: 6rem;
  height: ${({ isNavOpen }) => (isNavOpen ? '6rem' : 'unset')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StyledSpan = styled.span`
  width: 100%;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.accentColor};
  transform-origin: ${({ isNavOpen, short }) => (short && !isNavOpen ? 'right' : 'center')};
  transform: ${({ short, isNavOpen }) => (isNavOpen ? 'scaleX(1)' : short ? 'scaleX(0.5)' : 'scaleX(1)')};

  &:first-child {
    margin-bottom: 1rem;
    transform: ${({ isNavOpen }) => (isNavOpen ? 'translateY(2.5rem) rotate(45deg)' : '')};
  }

  &:nth-child(2) {
    transform: ${({ isNavOpen }) => (isNavOpen ? 'translateY(-2.5rem) rotate(-45deg)' : '')};
  }
`;

export const Loader = styled.div`
  height: 0.2rem;
  width: 100%;
  bottom: -0.2rem;
  left: 0;
  background-color: ${({ theme, isLoading }) => (isLoading ? 'transparent' : theme.colors.accentColor)};
  position: absolute;
`;
