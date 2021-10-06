import React from 'react';
import Link from 'next/link';
import Image from '@atoms/Image/Image';
import { ArrowLinkWrapper, ImageWrapper } from './ArrowLink.styles';

const ArrowLink = ({ link, title, image }) => {
  return (
    <Link href={`/${link.slug}`} passHref>
      <ArrowLinkWrapper>
        <h5>{title}</h5>
        <ImageWrapper>
          <Image image={image} />
        </ImageWrapper>
      </ArrowLinkWrapper>
    </Link>
  );
};

export default ArrowLink;
