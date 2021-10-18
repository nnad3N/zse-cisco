import { useContext } from 'react';
import PropTypes from 'prop-types';
import { childrenShape } from 'types/componentTypes';
import NavBar from '@organisms/NavBar/NavBar';
import Navigation from '@organisms/Navigation/Navigation';
import Footer from '@organisms/Footer/Footer';
import { AppContext } from 'providers/AppProvider';
import { StyledLayout } from './Layout.styles';

const Layout = ({ children, navigation, footer }) => {
  const { isNavOpen } = useContext(AppContext);
  const { logo, menuImage } = navigation;

  return (
    <StyledLayout isNavOpen={isNavOpen}>
      <NavBar logo={logo} menuImage={menuImage} />
      {isNavOpen && <Navigation navigation={navigation} />}
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
