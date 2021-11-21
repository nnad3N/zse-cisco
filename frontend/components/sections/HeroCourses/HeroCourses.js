import React from 'react';
import PropTypes from 'prop-types';
import HeroCourseComponent from '@molecules/HeroCourseComponent/HeroCourseComponent';
import LineHorizontal from '@atoms/LineHorizontal/LineHorizontal';
import { HeroCourseWrapper, ContentWrapper } from './HeroCourses.styles';

const HeroCourses = ({ data: { title, heroCourses, arrowImage } }) => {
  return (
    <HeroCourseWrapper>
      <LineHorizontal large>
        <h1>{title}</h1>
      </LineHorizontal>
      <ContentWrapper>
        {heroCourses.map((courseData) => (
          <HeroCourseComponent key={courseData.id} data={courseData} image={arrowImage} />
        ))}
      </ContentWrapper>
    </HeroCourseWrapper>
  );
};

HeroCourses.propTypes = {
  data: PropTypes.shape({
    arrowImage: PropTypes.object,
    heroCourses: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

HeroCourses.defaultProps = {
  data: {
    heroCourses: [],
    title: '',
  },
};

export default HeroCourses;
