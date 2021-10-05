import React from 'react';
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

export default FunctionalLink;
