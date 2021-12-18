import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '@templates/PageWrapper/PageWrapper';
import LineVertical from '@atoms/LineVertical/LineVertical';
import ListItem from '@molecules/ListItem/ListItem';

import { StyledList, StyledItem, Tile } from './SectionWithList.styles';

const SectionWithList = ({ data: { header, listItems } }) => {
  return (
    <PageWrapper short modular white>
      <Tile>
        <LineVertical>
          <h4>{header}</h4>
        </LineVertical>
        <StyledList>
          {listItems.map(({ item, id }) => (
            <ListItem key={id}>
              <StyledItem>{item}</StyledItem>
            </ListItem>
          ))}
        </StyledList>
      </Tile>
    </PageWrapper>
  );
};

SectionWithList.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    listItems: PropTypes.array,
  }),
};

SectionWithList.defaultProps = {
  data: {
    header: '',
    listItems: [],
  },
};

export default SectionWithList;
