import React from 'react';
import PropTypes from 'prop-types';
import LineVertical from '@atoms/LineVertical/LineVertical';
import { SectionDarkWrapper } from '@templates/SectionStyles/Section.styles';

const SectionWithDesc = ({ data: { header, description } }) => {
  return (
    <SectionDarkWrapper>
      <LineVertical large>
        <h1>{header}</h1>
      </LineVertical>
      <p>{description}</p>
    </SectionDarkWrapper>
  );
};

SectionWithDesc.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    description: PropTypes.string,
  }),
};

SectionWithDesc.defaultProps = {
  data: {
    header: '',
    description: '',
  },
};

export default SectionWithDesc;
