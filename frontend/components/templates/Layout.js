import PropTypes from 'prop-types';
import { childrenShape } from 'types/componentTypes';
import NavBar from '@organisms/NavBar/NavBar';
import Navigation from '@organisms/Navigation/Navigation';
import Footer from '@organisms/Footer/Footer';
import { useState } from 'react';

const Layout = ({ children, navigation, footer }) => {
  const { logo, menuImage } = navigation;
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {isNavOpen ? (
        <Navigation navigation={navigation} setIsNavOpen={setIsNavOpen} />
      ) : (
        <>
          <NavBar logo={logo} menuImage={menuImage} setIsNavOpen={setIsNavOpen} />
          {children}
          <Footer footer={footer} />
        </>
      )}
    </>
  );
};

Layout.propTypes = {
  children: childrenShape,
  navigation: PropTypes.object,
};

export default Layout;
