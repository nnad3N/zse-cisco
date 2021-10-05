import styled from 'styled-components';

export const StyledButton = styled.a`
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  padding: 1rem 2rem;
  border: ${({ theme, isFilled }) => (isFilled ? '0' : `3px solid ${theme.colors.mainColor}`)};
  background-color: ${({ theme, isFilled }) => (isFilled ? theme.colors.mainColor : 'transparent')};
  color: ${({ theme, isFilled }) => (isFilled ? theme.colors.white : theme.colors.mainColor)};
  display: flex;
  align-items: center;

  &:first-child {
    margin-right: ${({ hasMargin }) => (hasMargin ? '2rem' : '0')};
  }
`;
