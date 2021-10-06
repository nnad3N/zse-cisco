import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const FunctionalLink = ({ link, setIsNavOpen }) => {
  const { name, slug, newTab } = link;

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
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    newTab: PropTypes.bool,
  }),
  setIsNavOpen: PropTypes.func,
};

FunctionalLink.defaultProps = {
  link: {
    name: 'Link',
    slug: '',
  },
};

export default FunctionalLink;
