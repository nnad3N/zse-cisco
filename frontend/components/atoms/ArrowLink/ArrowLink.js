import React from 'react';
import Link from 'next/link';
import { ArrowLinkWrapper } from './ArrowLink.styles';

const ArrowLink = ({ data, title }) => {
  return (
    <ArrowLinkWrapper>
      <Link href={`/${data.slug}`} passHref>
        <a>{title}</a>
      </Link>
    </ArrowLinkWrapper>
  );
};

export default ArrowLink;
