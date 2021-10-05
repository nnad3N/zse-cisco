import React from 'react';
import Image from '@components/atoms/Image/Image';
import NavListItem from '@components/molecules/ListItem/ListItem';
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
              <NavListItem key={link.id} listIcon={navListIcon} link={link} setIsNavOpen={setIsNavOpen} />
            ))}
          </ul>
        </ContentWrapper>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
