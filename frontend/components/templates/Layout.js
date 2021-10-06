import { componentShape } from 'utils/shapes';
import NavBar from '@organisms/NavBar/NavBar';
import Navigation from '@organisms/Navigation/Navigation';
import { useState } from 'react';

const Layout = ({ children, navigation: { navLinks, logo, menuImage, exitButton, navListIcon } }) => {
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

Layout.propTypes = {
  children: componentShape,
  navigation: componentShape,
};

export default Layout;
