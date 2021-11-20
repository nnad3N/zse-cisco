import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const FunctionalLink = ({ link: { name, slug, newTab }, setIsNavOpen }) => {
  if (newTab) {
    return (
      <a href={slug} target="_blank" rel="noopener noreferrer" onClick={() => setIsNavOpen((state) => !state)}>
        {name}
      </a>
    );
  }

  return (
    <Link href={`/${slug}`} passHref>
      <a onClick={() => setIsNavOpen((state) => !state)}>{name}</a>
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
