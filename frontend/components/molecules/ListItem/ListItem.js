import React from 'react';
import PropTypes from 'prop-types';
import FunctionalLink from '@atoms/FunctionalLink';
import Image from '@atoms/Image/Image';
import { ListItemWrapper, ImageWrapper } from './ListItem.styles';

// If needed you can make this component accept children like LineVertical in order to make list with custom bullets
const ListItem = ({ link, listIcon, setIsNavOpen }) => {
  return (
    <ListItemWrapper>
      <ImageWrapper>
        <Image image={listIcon} priority />
      </ImageWrapper>
      <FunctionalLink link={link} setIsNavOpen={setIsNavOpen} />
    </ListItemWrapper>
  );
};

ListItem.propTypes = {
  link: PropTypes.object,
  listIcon: PropTypes.object,
  setIsNavOpen: PropTypes.func,
};

export default ListItem;
