import styled from 'styled-components';

export const ArrowLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  a {
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};

    &:visited {
      border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
