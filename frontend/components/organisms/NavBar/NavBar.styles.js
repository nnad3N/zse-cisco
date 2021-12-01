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

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DarkModeButton = styled.button`
  border: none;
  margin-right: 5rem;
  background-color: ${({ theme }) => theme.colors.accentColor};
  min-height: 5rem;
  min-width: 5rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: transform 0.1s ease-out;

  &:hover {
    transform: translate(2%, -7%);
    background-color: ${({ theme }) => theme.colors.lighterAccentColor};
  }

  &:hover::before {
    background-color: ${({ theme, dark }) => (dark ? theme.colors.mainColor : theme.colors.lighterAccentColor)};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &::before {
    background-color: ${({ theme, dark }) => (dark ? theme.colors.mainColor : theme.colors.accentColor)};
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 96 100' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3Bclip-rule:evenodd%3Bstroke-linejoin:round%3Bstroke-miterlimit:2%3B'%3E%3Cg id='sun'%3E%3Ccircle cx='46.868' cy='49.745' r='20.964' style='fill:%230e274d%3B'/%3E%3Cpath d='M51.452 8.031c-0 -2.529 -2.054 -4.583 -4.584 -4.583c-2.529 -0 -4.583 2.054 -4.583 4.583l0 9.584c0 2.529 2.054 4.583 4.583 4.583c2.53 -0 4.584 -2.054 4.584 -4.583l-0 -9.584Z' style='fill:%230e274d%3B'/%3E%3Cpath d='M51.452 81.914c-0 -2.53 -2.054 -4.584 -4.584 -4.584c-2.529 0 -4.583 2.054 -4.583 4.584l0 9.583c0 2.53 2.054 4.583 4.583 4.583c2.53 0 4.584 -2.053 4.584 -4.583l-0 -9.583Z' style='fill:%230e274d%3B'/%3E%3Cpath d='M88.601 54.347c2.53 0 4.584 -2.053 4.584 -4.583c-0 -2.529 -2.054 -4.583 -4.584 -4.583l-9.583 -0c-2.53 -0 -4.583 2.054 -4.583 4.583c-0 2.53 2.053 4.583 4.583 4.583l9.583 0Z' style='fill:%230e274d%3B'/%3E%3Cpath d='M14.719 54.347c2.53 0 4.583 -2.053 4.583 -4.583c0 -2.529 -2.053 -4.583 -4.583 -4.583l-9.583 -0c-2.53 -0 -4.584 2.054 -4.584 4.583c0 2.53 2.054 4.583 4.584 4.583l9.583 0Z' style='fill:%230e274d%3B'/%3E%3Cpath d='M79.619 23.495c1.789 -1.788 1.789 -4.693 -0 -6.481c-1.789 -1.789 -4.693 -1.789 -6.482 -0l-6.776 6.776c-1.789 1.789 -1.789 4.693 -0 6.482c1.788 1.789 4.693 1.789 6.481 -0l6.777 -6.777Z' style='fill:%230e274d%3B'/%3E%3Cpath d='M27.376 75.738c1.789 -1.789 1.789 -4.693 0 -6.482c-1.789 -1.788 -4.693 -1.788 -6.482 0l-6.776 6.777c-1.789 1.789 -1.789 4.693 -0 6.482c1.789 1.788 4.693 1.788 6.482 -0l6.776 -6.777Z' style='fill:%230e274d%3B'/%3E%3Cpath d='M20.6 17.014c-1.789 -1.789 -4.693 -1.789 -6.482 -0c-1.789 1.788 -1.789 4.693 -0 6.481l6.776 6.777c1.789 1.789 4.693 1.789 6.482 -0c1.789 -1.789 1.789 -4.693 0 -6.482l-6.776 -6.776Z' style='fill:%230e274d%3B'/%3E%3Cpath d='M72.842 69.256c-1.788 -1.788 -4.693 -1.788 -6.481 0c-1.789 1.789 -1.789 4.693 -0 6.482l6.776 6.777c1.789 1.788 4.693 1.788 6.482 -0c1.789 -1.789 1.789 -4.693 -0 -6.482l-6.777 -6.777Z' style='fill:%230e274d%3B'/%3E%3C/g%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    min-height: 3.8rem;
    min-width: 3.8rem;
  }

  &::after {
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-radius: ${({ dark }) => (dark ? '0 50% 50% 0' : '50% 0 0 50%')};
    transform: ${({ dark }) => (dark ? 'translate(-77%, -75%)' : 'translate(100%, -50%)')};
    min-height: 4rem;
    min-width: 4rem;
  }
`;
