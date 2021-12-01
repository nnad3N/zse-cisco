import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLinkWrapper, ImageWrapper, Arrow } from './ArrowLink.styles';

const ArrowLink = ({ slug, title, image, accented }) => {
  return (
    <Link href={`/${slug}`} passHref>
      <ArrowLinkWrapper accented={accented}>
        <h5>{title}</h5>
        <Arrow accented={accented} />
      </ArrowLinkWrapper>
    </Link>
  );
};

ArrowLink.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  accented: PropTypes.bool,
};

ArrowLink.defaultProps = {
  slug: '',
  title: '',
};

export default ArrowLink;
