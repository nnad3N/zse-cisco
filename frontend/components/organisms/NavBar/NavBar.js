import { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { AppContext } from 'providers/AppProvider';
import Image from '@atoms/Image/Image';
import { Header, Logo, MenuButton, StyledSpan, Loader } from './NavBar.styles';

const NavBar = ({ logo }) => {
  const { isLoading, isNavOpen, setIsNavOpen } = useContext(AppContext);

  return (
    <Header isLoading={isLoading} isNavOpen={isNavOpen}>
      <Loader id="loader" isLoading={isLoading} />
      <Link href="/" passHref>
        <Logo onClick={() => setIsNavOpen(false)}>
          <Image image={logo} priority />
        </Logo>
      </Link>
      <MenuButton onClick={() => setIsNavOpen((state) => !state)} isNavOpen={isNavOpen} data-testid="menu-button">
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
