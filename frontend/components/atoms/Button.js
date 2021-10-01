import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
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

const Button = ({ data, hasMargin }) => {
  const { caption, isFilled, link } = data;
  return (
    <StyledButton hasMargin={hasMargin} href={link.slug} isFilled={isFilled}>
      {caption}
    </StyledButton>
  );
};

export default Button;
