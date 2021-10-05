import React from 'react';
import { HeroInstructorWrapper, ImageWrapper, InstructorWrapper } from './HeroInstructorComponent.styles';

const HeroInstructorComponent = ({ data }) => {
  const { header, instructor, description } = data;
  return (
    <HeroInstructorWrapper>
      <ImageWrapper />
      <InstructorWrapper>
        <h5>{header}</h5>
        <h4>{instructor}</h4>
        <p>{description}</p>
      </InstructorWrapper>
    </HeroInstructorWrapper>
  );
};

export default HeroInstructorComponent;
