import React from 'react';
import PropTypes from 'prop-types';
import FunctionalLink from '@atoms/FunctionalLink/FunctionalLink';
import { ListItemWrapper, Bullet } from './ListItem.styles';
import { childrenShape } from 'propTypes/componentTypes';

const ListItem = ({ link, setIsNavOpen, hasLinks, children }) => {
  return (
    <ListItemWrapper>
      <Bullet />
      {hasLinks ? <FunctionalLink link={link} setIsNavOpen={setIsNavOpen} /> : children}
    </ListItemWrapper>
  );
};

ListItem.propTypes = {
  link: PropTypes.object,
  setIsNavOpen: PropTypes.func,
  hasLinks: PropTypes.bool,
  children: childrenShape,
};

export default ListItem;
