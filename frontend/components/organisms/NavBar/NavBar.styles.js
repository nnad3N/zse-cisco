import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  padding: 1rem ${({ theme }) => theme.dimensions.padding};
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};

  img {
    border-radius: 0;
  }
`;

export const Logo = styled.div`
  width: 25rem;
`;

export const MenuImage = styled.div`
  width: 5rem;
  cursor: pointer;
`;
