import styled from 'styled-components';

export const StyledButton = styled.a`
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  padding: 1rem 2rem;
  border: ${({ theme, isFilled }) => (isFilled ? '0' : `3px solid ${theme.colors.mainColor}`)};
  border-color: ${({ theme, accent }) => (accent ? theme.colors.accentColor : theme.colors.mainColor)};
  background-color: ${({ theme, isFilled, accent }) => (isFilled ? (accent ? theme.colors.accentColor : theme.colors.mainColor) : 'transparent')};
  color: ${({ theme, isFilled, accent }) => (isFilled ? theme.colors.white : accent ? theme.colors.accentColor : theme.colors.mainColor)};
  display: flex;
  align-items: center;
  transition: all 0.1s ease-out;

  &:first-child {
    margin-right: ${({ hasMargin }) => (hasMargin ? '2rem' : '0')};
  }

  &:hover {
    transform: translate(1%, -10%);
    border-color: ${({ theme, accent }) => (accent ? theme.colors.lighterAccentColor : theme.colors.lighterMainColor)};
    background-color: ${({ theme, isFilled, accent }) =>
      isFilled ? (accent ? theme.colors.lighterAccentColor : theme.colors.lighterMainColor) : 'transparent'};
    color: ${({ theme, isFilled, accent }) =>
      isFilled ? theme.colors.white : accent ? theme.colors.lighterAccentColor : theme.colors.lighterMainColor};
  }
`;
