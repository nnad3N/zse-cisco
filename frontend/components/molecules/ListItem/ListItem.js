import React from 'react';
import FunctionalLink from '@atoms/FunctionalLink';
import Image from '@atoms/Image/Image';
import { ListItemWrapper, ImageWrapper } from './ListItem.styles';

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

export default ListItem;
