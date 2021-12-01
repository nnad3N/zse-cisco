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
    background-color: ${({ theme, dark }) => (dark ? theme.colors.lighterAccentColor : theme.colors.mainColor)};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &::before {
    background-color: ${({ theme, dark }) => (dark ? theme.colors.accentColor : theme.colors.mainColor)};
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 846 846' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3E%3Cg id='sun'%3E%3Ccircle cx='422.12' cy='422.452' r='188.656' style='fill:%230e274d;'/%3E%3Cpath d='M463.366,43.63c0,-22.764 -18.482,-41.245 -41.246,-41.245c-22.764,-0 -41.245,18.481 -41.245,41.245l-0,86.241c-0,22.765 18.481,41.246 41.245,41.246c22.764,0 41.246,-18.481 41.246,-41.246l0,-86.241Z' style='fill:%230e274d;'/%3E%3Cpath d='M463.366,714.745c0,-22.764 -18.482,-41.245 -41.246,-41.245c-22.764,-0 -41.245,18.481 -41.245,41.245l-0,86.241c-0,22.765 18.481,41.246 41.245,41.246c22.764,0 41.246,-18.481 41.246,-41.246l0,-86.241Z' style='fill:%230e274d;'/%3E%3Cpath d='M800.798,463.697c22.764,0 41.246,-18.481 41.246,-41.245c0,-22.764 -18.482,-41.246 -41.246,-41.246l-86.241,-0c-22.764,-0 -41.245,18.482 -41.245,41.246c-0,22.764 18.481,41.245 41.245,41.245l86.241,0Z' style='fill:%230e274d;'/%3E%3Cpath d='M129.683,463.697c22.764,0 41.246,-18.481 41.246,-41.245c0,-22.764 -18.482,-41.246 -41.246,-41.246l-86.241,-0c-22.764,-0 -41.245,18.482 -41.245,41.246c-0,22.764 18.481,41.245 41.245,41.245l86.241,0Z' style='fill:%230e274d;'/%3E%3Cpath d='M719.051,183.708c16.097,-16.097 16.097,-42.234 0,-58.331c-16.096,-16.096 -42.233,-16.096 -58.33,0l-60.982,60.982c-16.096,16.097 -16.096,42.234 0,58.33c16.097,16.097 42.234,16.097 58.331,0l60.981,-60.981Z' style='fill:%230e274d;'/%3E%3Cpath d='M244.501,658.258c16.097,-16.097 16.097,-42.234 0,-58.331c-16.096,-16.096 -42.233,-16.096 -58.33,0l-60.982,60.982c-16.096,16.097 -16.096,42.234 0,58.33c16.097,16.097 42.234,16.097 58.331,0l60.981,-60.981Z' style='fill:%230e274d;'/%3E%3Cpath d='M183.52,125.377c-16.097,-16.096 -42.234,-16.096 -58.331,0c-16.096,16.097 -16.096,42.234 0,58.331l60.982,60.981c16.097,16.097 42.234,16.097 58.33,0c16.097,-16.096 16.097,-42.233 0,-58.33l-60.981,-60.982Z' style='fill:%230e274d;'/%3E%3Cpath d='M658.07,599.927c-16.097,-16.096 -42.234,-16.096 -58.331,0c-16.096,16.097 -16.096,42.234 0,58.331l60.982,60.981c16.097,16.097 42.234,16.097 58.33,0c16.097,-16.096 16.097,-42.233 0,-58.33l-60.981,-60.982Z' style='fill:%230e274d;'/%3E%3C/g%3E%3C/svg%3E");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    min-height: 3.8rem;
    min-width: 3.8rem;
  }

  &::after {
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-radius: ${({ dark }) => (dark ? '50% 0 0 50%' : '0 50% 50% 0')};
    transform: ${({ dark }) => (dark ? 'translate(100%, -50%)' : 'translate(-77%, -75%)')};
    min-height: 4rem;
    min-width: 4rem;
  }
`;
