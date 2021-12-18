import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { StyledButton } from './Button.styles';

const Button = ({ data: { isFilled, text, url }, hasMargin, accent }) => {
  return (
    <Link href={url || ''} passHref>
      <StyledButton hasMargin={hasMargin} isFilled={isFilled} accent={accent}>
        {text}
      </StyledButton>
    </Link>
  );
};

Button.propTypes = {
  data: PropTypes.shape({
    caption: PropTypes.string,
    isFilled: PropTypes.bool,
    link: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  hasMargin: PropTypes.bool,
  accept: PropTypes.bool,
};

Button.defaultProps = {
  data: {
    caption: '',
    link: {
      slug: '',
    },
  },
};

export default Button;
