import React from 'react';
import HeroInstructorComponent from '@molecules/HeroInstructorComponent/HeroInstructorComponent';
import { HeroInstructorsWrapper } from './HeroInstructors.styles';

const HeroInstructors = ({ data }) => {
  return (
    <HeroInstructorsWrapper>
      {data.instructorComponent.map((instructorData) => (
        <HeroInstructorComponent key={instructorData.id} data={instructorData} />
      ))}
    </HeroInstructorsWrapper>
  );
};

export default HeroInstructors;
