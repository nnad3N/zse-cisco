import { useContext } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@molecules/ListItem/ListItem';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { AppContext } from 'providers/AppProvider';
import { StyledNavigation, ContentWrapper } from './Navigation.styles';

const Navigation = ({ navLinks }) => {
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
              <ListItem hasLinks key={link.id} link={link} setIsNavOpen={setIsNavOpen} />
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
      groupName: PropTypes.string,
      id: PropTypes.number,
      links: PropTypes.arrayOf(PropTypes.object),
    })
  ).isRequired,
};

Navigation.defaultProps = {
  navLinks: [
    {
      groupName: '',
      id: 0,
      links: [],
    },
  ],
};

export default Navigation;
