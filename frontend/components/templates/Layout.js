import NavBar from '@organisms/NavBar/NavBar';
import Navigation from '@organisms/Navigation/Navigation';
import { useState } from 'react';

const Layout = ({ children, navigation }) => {
  const { navLinks, logo, menuImage, exitButton, navListIcon } = navigation;

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {isNavOpen ? (
        <Navigation navLinks={navLinks} exitButton={exitButton} setIsNavOpen={setIsNavOpen} navListIcon={navListIcon} />
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
