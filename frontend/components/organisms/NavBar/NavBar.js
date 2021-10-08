import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LoadingContext } from 'providers/LoadingProvider';
import Image from '@atoms/Image/Image';
import { Header, Logo, MenuImage } from './NavBar.styles';

const Loader = styled.div`
  height: 0.2rem;
  width: 100%;
  bottom: -0.2rem;
  left: 0;
  background-color: ${({ theme, isLoading }) => (isLoading ? 'transparent' : theme.colors.accentColor)};
  position: absolute;
`;

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
