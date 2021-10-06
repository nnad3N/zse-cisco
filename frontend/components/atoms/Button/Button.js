import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ data, hasMargin, accent }) => {
  const {
    caption,
    isFilled,
    link: { slug },
  } = data;
  return (
    <StyledButton hasMargin={hasMargin} href={`/${slug}`} isFilled={isFilled} accent={accent}>
      {caption}
    </StyledButton>
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
