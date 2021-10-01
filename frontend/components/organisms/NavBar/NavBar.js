import React from 'react';
import Image from '../../atoms/Image';
import { Header, Logo, MenuImage } from './NavBar.styles';

const NavBar = ({ logo, menuImage, setIsNavOpen }) => {
  return (
    <Header>
      <Logo>
        <Image image={logo} />
      </Logo>
      <MenuImage onClick={() => setIsNavOpen((state) => !state)}>
        <Image image={menuImage} />
      </MenuImage>
    </Header>
  );
};

export default NavBar;
