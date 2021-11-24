import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  padding: 1rem ${({ theme }) => theme.padding.m};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
  z-index: 30;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};
  position: relative;

  img {
    border-radius: 0;
  }

  ${({ theme }) => theme.mq.laptop} {
    padding: ${({ theme, isNavOpen }) => (isNavOpen ? `1rem ${theme.padding.s}` : `1rem ${theme.padding.m}`)};
  }

  ${({ theme }) => theme.mq.tabletLarge} {
    padding: 1rem ${({ theme }) => theme.padding.m};
  }

  ${({ theme }) => theme.mq.mobileLarge} {
    padding: 2rem ${({ theme }) => theme.padding.s};
  }
`;

export const Logo = styled.a`
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
  transition: transform 0.1s ease-out;

  &:hover {
    transform: ${({ isNavOpen }) => (isNavOpen ? `translate(2%, -6%)` : `translate(2%, -10%)`)};

    span {
      background-color: ${({ theme }) => theme.colors.lighterAccentColor};
    }
  }
`;

export const StyledSpan = styled.span`
  transition: background-color 0.3s ease-out;
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
