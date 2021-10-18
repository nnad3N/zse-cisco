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

export const MenuImage = styled.button`
  background-color: transparent;
  border: none;
  width: 5rem;
  cursor: pointer;
`;

export const Loader = styled.div`
  height: 0.2rem;
  width: 100%;
  bottom: -0.2rem;
  left: 0;
  background-color: ${({ theme, isLoading }) => (isLoading ? 'transparent' : theme.colors.accentColor)};
  position: absolute;
`;
