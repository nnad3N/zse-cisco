import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ArrowLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  a {
    color: ${({ theme }) => theme.colors.mainColor};
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
`;

const ArrowLink = ({ data, title }) => {
  return (
    <ArrowLinkWrapper>
      <Link href={data.slug} passHref>
        <a>{title}</a>
      </Link>
    </ArrowLinkWrapper>
  );
};

export default ArrowLink;
