import styled from 'styled-components';

export const ArrowLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  transition: transform 0.1s ease-out;

  &:visited {
    border-bottom: 2px solid ${({ theme, accented }) => (accented ? theme.colors.accentColor : theme.colors.mainColor)};
    color: ${({ theme, accented }) => (accented ? theme.colors.accentColor : theme.colors.mainColor)};
  }

  h5 {
    color: ${({ theme, accented }) => (accented ? theme.colors.accentColor : theme.colors.mainColor)};
    border-bottom: 2px solid;
    border-color: transparent;
    margin-right: 2rem;
    font-size: ${({ theme }) => theme.fontSize.body};
    transition: border-color 0.2s ease-out;
  }

  &:hover {
    transform: translate(1%, -10%);

    h5 {
      border-color: ${({ theme, accented }) => (accented ? theme.colors.accentColor : theme.colors.mainColor)};
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 3.8rem;
`;
