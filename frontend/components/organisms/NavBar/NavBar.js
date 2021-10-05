import React from 'react';
import Image from '@atoms/Image/Image';
import { Header, Logo, MenuImage } from './NavBar.styles';

const NavBar = ({ logo, menuImage, setIsNavOpen }) => {
  return (
    <Header>
      <Logo>
        <Image image={logo} priority />
      </Logo>
      <MenuImage onClick={() => setIsNavOpen((state) => !state)}>
        <Image image={menuImage} priority />
      </MenuImage>
    </Header>
  );
};

export default NavBar;
