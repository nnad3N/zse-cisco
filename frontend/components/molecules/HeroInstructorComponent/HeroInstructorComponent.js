import React from 'react';
import PropTypes from 'prop-types';
import Image from '@atoms/Image/Image';
import { HeroInstructorWrapper, ImageWrapper, InstructorWrapper } from './HeroInstructorComponent.styles';

const HeroInstructorComponent = ({ data: { header, instructor, description, image } }) => {
  return (
    <HeroInstructorWrapper>
      <ImageWrapper>
        <Image image={image} />
      </ImageWrapper>
      <InstructorWrapper>
        <h5>{header}</h5>
        <h4>{instructor}</h4>
        <p>{description}</p>
      </InstructorWrapper>
    </HeroInstructorWrapper>
  );
};

HeroInstructorComponent.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    instructor: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
};

HeroInstructorComponent.defaultProps = {
  data: {
    header: '',
    instructor: '',
    description: '',
  },
};

export default HeroInstructorComponent;
