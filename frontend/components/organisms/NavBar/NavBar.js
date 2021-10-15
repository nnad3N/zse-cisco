import { useContext } from 'react';
import PropTypes from 'prop-types';
import { LoadingContext } from 'providers/LoadingProvider';
import Image from '@atoms/Image/Image';
import { Header, Logo, MenuImage, Loader } from './NavBar.styles';

const NavBar = ({ logo, menuImage, setIsNavOpen }) => {
  const isLoading = useContext(LoadingContext);

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
  setIsNavOpen: PropTypes.func,
};

export default NavBar;
