import NavBar from '../organisms/NavBar/NavBar';
import Navigation from '../organisms/Navigation/Navigation';
import { useState } from 'react';
import styled from 'styled-components';

const Layout = ({ children, navigation }) => {
  const { links, logo, menuImage } = navigation;

  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <>
      {isNavOpen ? (
        <Navigation links={links} setIsNavOpen={setIsNavOpen} />
      ) : (
        <>
          <NavBar logo={logo} menuImage={menuImage} setIsNavOpen={setIsNavOpen} />
          {children}
        </>
      )}
    </>
  );
};

export default Layout;
