import { useContext } from 'react';
import PropTypes from 'prop-types';
import { childrenShape } from 'types/componentTypes';
import NavBar from '@organisms/NavBar/NavBar';
import Navigation from '@organisms/Navigation/Navigation';
import Footer from '@organisms/Footer/Footer';
import { AppContext } from 'providers/AppProvider';
import { StyledLayout } from './Layout.styles';

const Layout = ({ children, navigation: { logo, menuImage, navLinks }, footer }) => {
  const { isNavOpen } = useContext(AppContext);

  return (
    <StyledLayout isNavOpen={isNavOpen}>
      <NavBar logo={logo} menuImage={menuImage} />
      {isNavOpen && <Navigation navLinks={navLinks} />}
      {children}
      <Footer footer={footer} />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: childrenShape,
  navigation: PropTypes.object,
};

export default Layout;
