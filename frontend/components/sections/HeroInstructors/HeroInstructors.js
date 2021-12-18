import React from 'react';
import PropTypes from 'prop-types';
import HeroInstructorComponent from '@molecules/HeroInstructorComponent/HeroInstructorComponent';
import { HeroInstructorsWrapper } from './HeroInstructors.styles';

const HeroInstructors = ({ data: { instructors } }) => {
  return (
    <HeroInstructorsWrapper>
      {instructors.map((instructor) => (
        <HeroInstructorComponent key={instructor.id} data={instructor} />
      ))}
    </HeroInstructorsWrapper>
  );
};

HeroInstructors.propTypes = {
  data: PropTypes.shape({
    instructors: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

HeroInstructors.defaultProps = {
  data: {
    instructors: [],
  },
};

export default HeroInstructors;
