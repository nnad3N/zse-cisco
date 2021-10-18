import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from 'providers/AppProvider';
import Image from '@atoms/Image/Image';
import { Header, Logo, MenuButton, StyledSpan, Loader } from './NavBar.styles';

const NavBar = ({ logo }) => {
  const { isLoading, isNavOpen, setIsNavOpen } = useContext(AppContext);

  return (
    <Header isLoading={isLoading}>
      <Loader id="loader" isLoading={isLoading} />
      <Logo>
        <Image image={logo} priority />
      </Logo>
      <MenuButton onClick={() => setIsNavOpen((state) => !state)} isNavOpen={isNavOpen}>
        <StyledSpan short isNavOpen={isNavOpen} />
        <StyledSpan isNavOpen={isNavOpen} />
      </MenuButton>
    </Header>
  );
};

NavBar.propTypes = {
  logo: PropTypes.object,
};

export default NavBar;
