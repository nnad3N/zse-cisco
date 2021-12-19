import { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { AppContext } from 'providers/AppProvider';
import { StyledButton } from './Button.styles';

const Button = ({ data: { isFilled, text, url }, hasMargin, accent }) => {
  const { currentDarkMode } = useContext(AppContext);

  return (
    <Link href={url || ''} passHref>
      <StyledButton hasMargin={hasMargin} isFilled={isFilled} accent={accent} dark={currentDarkMode}>
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
