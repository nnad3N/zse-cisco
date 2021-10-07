import React from 'react';
import PropTypes from 'prop-types';
import Image from '@atoms/Image/Image';
import { Header, Logo, MenuImage } from './NavBar.styles';

const NavBar = ({ logo, menuImage, setIsNavOpen }) => {
  return (
    <Header id="navbar">
      <Logo>
        <Image image={logo} priority />
      </Logo>
      <MenuImage onClick={() => setIsNavOpen((state) => !state)}>
        <Image image={menuImage} priority />
      </MenuImage>
    </Header>
  );
};

NavBar.propTypes = {
  logo: PropTypes.object,
  menuImage: PropTypes.object,
  setIsNavOpen: PropTypes.func,
};

export default NavBar;
