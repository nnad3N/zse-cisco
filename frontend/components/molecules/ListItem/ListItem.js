import React from 'react';
import PropTypes from 'prop-types';
import FunctionalLink from '@atoms/FunctionalLink/FunctionalLink';
import { ListItemWrapper, Bullet } from './ListItem.styles';
import { childrenShape } from 'propTypes/componentTypes';

const ListItem = ({ link, setIsNavOpen, hasLinks, children, ...props }) => {
  return (
    <ListItemWrapper {...props}>
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
  props: PropTypes.bool,
};

export default ListItem;
