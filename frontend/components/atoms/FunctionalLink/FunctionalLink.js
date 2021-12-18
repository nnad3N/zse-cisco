import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const FunctionalLink = ({ link: { text, url, newTab }, setIsNavOpen }) => {
  if (newTab) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" onClick={() => setIsNavOpen((state) => !state)}>
        {text}
      </a>
    );
  }

  return (
    <Link href={url || ''} passHref>
      <a onClick={() => setIsNavOpen((state) => !state)}>{text}</a>
    </Link>
  );
};

FunctionalLink.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    newTab: PropTypes.bool,
  }).isRequired,
  setIsNavOpen: PropTypes.func,
};

FunctionalLink.defaultProps = {
  link: {
    name: '',
    slug: '',
  },
};

export default FunctionalLink;
