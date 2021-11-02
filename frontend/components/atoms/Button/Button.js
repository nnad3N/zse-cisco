import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { StyledButton } from './Button.styles';

const Button = ({ data, hasMargin, accent }) => {
  const {
    caption,
    isFilled,
    link: { slug },
  } = data;
  return (
    <Link href={`/${slug}`} passHref>
      <StyledButton hasMargin={hasMargin} isFilled={isFilled} accent={accent}>
        {caption}
      </StyledButton>
    </Link>
  );
};

Button.propTypes = {
  data: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    isFilled: PropTypes.bool,
    link: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  hasMargin: PropTypes.bool,
  accept: PropTypes.bool,
};

Button.defaultProps = {
  data: {
    caption: 'Click',
    link: {
      slug: '',
    },
  },
};

export default Button;
