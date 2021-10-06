import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ data, hasMargin, accent }) => {
  const { caption, isFilled, link } = data;
  return (
    <StyledButton hasMargin={hasMargin} href={link.slug} isFilled={isFilled} accent={accent}>
      {caption}
    </StyledButton>
  );
};

export default Button;
