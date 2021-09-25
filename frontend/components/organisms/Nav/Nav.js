import React from 'react';
import Link from 'next/link';
import { NavBar, Logo, Links, LinkGroup, StyledLink, LinkContainer, LinkSpan, LinkContainerBackground } from './Nav.styles';

const Nav = ({ navigation }) => {
  const { links } = navigation;

  return (
    <NavBar>
      <Logo>
        <Link href="/">Strapi Blog</Link>
      </Logo>
      <Links>
        {links.map(({ id, groupName }) => (
          <LinkGroup key={id}>{groupName}</LinkGroup>
        ))}
      </Links>
    </NavBar>
  );
};

export default Nav;
