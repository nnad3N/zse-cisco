import React from 'react';
import styled from 'styled-components';
import FunctionalLink from './FunctionalLink';
import Image from './Image';

const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.navList};
  }
`;

const ImageWrapper = styled.div`
  width: 2rem;
  margin-right: 2rem;
`;

const ListItem = ({ link, listIcon, setIsNavOpen }) => {
  return (
    <ListItemWrapper>
      <ImageWrapper>
        <Image image={listIcon} />
      </ImageWrapper>
      <FunctionalLink link={link} onClick={() => setIsNavOpen((state) => !state)} />
    </ListItemWrapper>
  );
};

export default ListItem;
