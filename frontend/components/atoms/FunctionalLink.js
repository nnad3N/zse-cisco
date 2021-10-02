import React from 'react';
import Link from 'next/link';

const FunctionalLink = ({ link }) => {
  const { name, slug, newTab } = link;

  if (newTab) {
    return (
      <a href={slug} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    );
  }

  return (
    <Link href={`/${slug}`} passHref>
      <a>{name}</a>
    </Link>
  );
};

export default FunctionalLink;
