import styled from 'styled-components';

export const StyledButton = styled.a`
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  padding: 1rem 2rem;
  border: ${({ theme, isFilled }) => (isFilled ? '0' : `3px solid ${theme.colors.buttonColor}`)};
  border-color: ${({ theme, accent }) => (accent ? theme.colors.accentColor : theme.colors.buttonColor)};
  background-color: ${({ theme, isFilled, accent }) => (isFilled ? (accent ? theme.colors.accentColor : theme.colors.buttonColor) : 'transparent')};
  color: ${({ theme, isFilled, accent }) => (isFilled ? theme.colors.buttonTextColor : accent ? theme.colors.accentColor : theme.colors.buttonColor)};
  display: flex;
  align-items: center;
  transition: all 0.1s ease-out;

  &:first-child {
    margin-right: ${({ hasMargin }) => (hasMargin ? '2rem' : '0')};
  }

  &:hover {
    transform: translate(1%, -10%);
    border-color: ${({ theme, accent }) => (accent ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor)};
    background-color: ${({ theme, isFilled, accent }) =>
      isFilled ? (accent ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor) : 'transparent'};
    color: ${({ theme, isFilled, accent }) =>
      isFilled ? theme.colors.buttonTextColor : accent ? theme.colors.lighterAccentColor : theme.colors.lighterButtonColor};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme, dark }) => (dark ? theme.colors.white : theme.colors.accentColor)};
    outline-offset: -1px;
  }
`;
