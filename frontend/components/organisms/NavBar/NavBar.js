import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { AppContext } from 'providers/AppProvider';
import Image from '@atoms/Image/Image';
import { Header, Logo, MenuButton, StyledSpan, Loader, ButtonsWrapper, DarkModeButton } from './NavBar.styles';

const NavBar = ({ logo }) => {
  const { isLoading, isNavOpen, setIsNavOpen, handleDarkModeChange, currentDarkMode } = useContext(AppContext);

  return (
    <Header isLoading={isLoading} isNavOpen={isNavOpen}>
      <Loader id="loader" isLoading={isLoading} />
      <Link href="/" passHref>
        <Logo onClick={() => setIsNavOpen(false)}>
          <Image image={logo} />
        </Logo>
      </Link>
      <ButtonsWrapper>
        <DarkModeButton onClick={handleDarkModeChange} dark={currentDarkMode} />
        <MenuButton onClick={() => setIsNavOpen((state) => !state)} isNavOpen={isNavOpen} data-testid="menu-button">
          <StyledSpan short isNavOpen={isNavOpen} />
          <StyledSpan isNavOpen={isNavOpen} />
        </MenuButton>
      </ButtonsWrapper>
    </Header>
  );
};

NavBar.propTypes = {
  logo: PropTypes.object,
};

export default NavBar;
