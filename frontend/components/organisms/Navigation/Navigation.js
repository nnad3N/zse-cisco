import React from 'react';
import PropTypes from 'prop-types';
import Image from '@atoms/Image/Image';
import ListItem from '@molecules/ListItem/ListItem';
import { StyledNavigation, ExitButton, ContentWrapper } from './Navigation.styles';

const Navigation = ({ navLinks, setIsNavOpen, exitButton, navListIcon }) => {
  return (
    <StyledNavigation>
      <ExitButton onClick={() => setIsNavOpen((state) => !state)}>
        <Image image={exitButton} />
      </ExitButton>

      {navLinks.map(({ groupName, id, links }) => (
        <ContentWrapper key={id}>
          <h3>{groupName}</h3>
          <ul>
            {links.map((link) => (
              <ListItem key={link.id} listIcon={navListIcon} link={link} setIsNavOpen={setIsNavOpen} />
            ))}
          </ul>
        </ContentWrapper>
      ))}
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string.isRequired,
      id: PropTypes.number,
      links: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  setIsNavOpen: PropTypes.func,
  exitButton: PropTypes.object,
  navListIcon: PropTypes.object,
};

Navigation.defaultProps = {
  navLinks: [
    {
      groupName: 'Nazwa',
    },
  ],
};

export default Navigation;
