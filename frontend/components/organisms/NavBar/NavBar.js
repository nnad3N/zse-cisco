import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from 'providers/AppProvider';
import Image from '@atoms/Image/Image';
import { Header, Logo, MenuImage, Loader } from './NavBar.styles';

const NavBar = ({ logo, menuImage }) => {
  const { isLoading, setIsNavOpen } = useContext(AppContext);

  return (
    <Header isLoading={isLoading}>
      <Loader id="loader" isLoading={isLoading} />
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
};

export default NavBar;
