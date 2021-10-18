import { useContext } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@molecules/ListItem/ListItem';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { AppContext } from 'providers/AppProvider';
import { StyledNavigation, ContentWrapper } from './Navigation.styles';

const Navigation = ({ navigation: { navLinks, exitButton, navListIcon } }) => {
  const { setIsNavOpen } = useContext(AppContext);

  return (
    <StyledNavigation>
      {navLinks.map(({ groupName, id, links }) => (
        <ContentWrapper key={id}>
          <LineHorizontal>
            <h3>{groupName}</h3>
          </LineHorizontal>
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
  exitButton: PropTypes.object,
  navListIcon: PropTypes.object,
};

Navigation.defaultProps = {
  navLinks: [
    {
      groupName: 'Group Name',
    },
  ],
};

export default Navigation;
