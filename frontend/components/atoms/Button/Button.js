import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ data, hasMargin }) => {
  const { caption, isFilled, link } = data;
  return (
    <StyledButton hasMargin={hasMargin} href={link.slug} isFilled={isFilled}>
      {caption}
    </StyledButton>
  );
};

export default Button;
