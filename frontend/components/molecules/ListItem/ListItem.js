import React from 'react';
import PropTypes from 'prop-types';
import FunctionalLink from '@atoms/FunctionalLink/FunctionalLink';
import Image from '@atoms/Image/Image';
import { ListItemWrapper, Bullet } from './ListItem.styles';

// If needed you can make this component accept children like LineVertical in order to make list with custom bullets
const ListItem = ({ link, setIsNavOpen }) => {
  return (
    <ListItemWrapper>
      <Bullet />
      <FunctionalLink link={link} setIsNavOpen={setIsNavOpen} />
    </ListItemWrapper>
  );
};

ListItem.propTypes = {
  link: PropTypes.object,
  setIsNavOpen: PropTypes.func,
};

export default ListItem;
