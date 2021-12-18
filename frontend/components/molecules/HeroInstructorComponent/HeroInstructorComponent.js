import React from 'react';
import PropTypes from 'prop-types';
import { HeroInstructorWrapper } from './HeroInstructorComponent.styles';

const HeroInstructorComponent = ({ data: { header, name, description } }) => {
  return (
    <HeroInstructorWrapper>
      <h5>{header}</h5>
      <h4>{name}</h4>
      <p>{description}</p>
    </HeroInstructorWrapper>
  );
};

HeroInstructorComponent.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

HeroInstructorComponent.defaultProps = {
  data: {
    header: '',
    name: '',
    description: '',
  },
};

export default HeroInstructorComponent;
