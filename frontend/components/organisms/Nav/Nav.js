import React from 'react';
import Link from 'next/link';
import Image from '../../atoms/Image';
import { NavBar, Logo, Links, LinkGroup, StyledLink, LinkContainer, LinkSpan, LinkContainerBackground } from './Nav.styles';

const Nav = ({ navigation }) => {
  const { links, logo } = navigation;
  console.log(navigation);

  return (
    <NavBar>
      <Logo>
        <Image image={logo} />
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
