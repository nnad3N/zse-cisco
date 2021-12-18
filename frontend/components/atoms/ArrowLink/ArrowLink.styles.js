import styled from 'styled-components';

export const ArrowLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  transition: transform 0.1s ease-out;

  &:visited {
    border-bottom: 2px solid ${({ theme, accented }) => (accented ? theme.colors.accentColor : theme.colors.buttonColor)};
    color: ${({ theme, accented }) => (accented ? theme.colors.accentColor : theme.colors.buttonColor)};
  }

  h5 {
    color: ${({ theme, accented }) => (accented ? theme.colors.accentColor : theme.colors.buttonColor)};
    border-bottom: 2px solid;
    border-color: transparent;
    margin-right: 2rem;
    font-size: ${({ theme }) => theme.fontSize.body};
    transition: all 0.2s ease-out;
  }

  &:hover {
    transform: translate(1%, -10%);

    h5 {
      border-color: ${({ theme, accented }) => (accented ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor)};
      color: ${({ theme, accented }) => (accented ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor)};
    }
  }

  &:focus-visible {
    outline: 3px solid;
    outline-offset: 0.75rem;
  }
`;

export const Arrow = styled.span`
  background-color: ${({ theme, accented }) => (accented ? theme.colors.accentColor : theme.colors.buttonColor)};
  min-width: 4.2rem;
  min-height: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  position: relative;
  transition: background-color 0.1s ease-out;

  ${ArrowLinkWrapper}:hover &,
  ${ArrowLinkWrapper}:hover &::before,
  ${ArrowLinkWrapper}:hover &::after {
    background-color: ${({ theme, accented }) => (accented ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor)};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    transform-origin: right;
    right: 0;
    min-width: 2.5rem;
    min-height: 0.5rem;
    background-color: ${({ theme, accented }) => (accented ? theme.colors.accentColor : theme.colors.buttonColor)};
    border-radius: 0.5rem;
  }

  &::before {
    transform: translateY(30%) rotate(45deg);
  }

  &::after {
    transform: translateY(-30%) rotate(-45deg);
  }
`;
