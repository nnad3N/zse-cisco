import React from 'react';
import PropTypes from 'prop-types';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { Wrapper, HeaderWrapper } from './SectionTextHeader.styles';

const SectionTextHeader = ({ data: { header } }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <LineHorizontal large>
          <h1>{header}</h1>
        </LineHorizontal>
      </HeaderWrapper>
    </Wrapper>
  );
};

SectionTextHeader.propTypes = {
  header: PropTypes.string,
};

SectionTextHeader.defaultProps = {
  header: '',
};

export default SectionTextHeader;
