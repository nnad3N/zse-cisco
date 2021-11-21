import React from 'react';
import PropTypes from 'prop-types';
import HeroInstructorComponent from '@molecules/HeroInstructorComponent/HeroInstructorComponent';
import { HeroInstructorsWrapper } from './HeroInstructors.styles';

const HeroInstructors = ({ data: { instructorComponents } }) => {
  return (
    <HeroInstructorsWrapper>
      {instructorComponents.map((instructorData) => (
        <HeroInstructorComponent key={instructorData.id} data={instructorData} />
      ))}
    </HeroInstructorsWrapper>
  );
};

HeroInstructors.propTypes = {
  data: PropTypes.shape({
    instructorComponents: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

HeroInstructors.defaultProps = {
  data: {
    instructorComponents: [],
  },
};

export default HeroInstructors;
