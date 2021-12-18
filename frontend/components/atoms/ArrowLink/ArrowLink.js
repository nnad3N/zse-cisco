import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ArrowLinkWrapper, Arrow } from './ArrowLink.styles';

const ArrowLink = ({ url, text, accented }) => {
  return (
    <Link href={url || ''} passHref>
      <ArrowLinkWrapper accented={accented}>
        <h5>{text}</h5>
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
